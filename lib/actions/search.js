/**
 * Auto-generated action file for "Box 2.0" API.
 *
 * Generated at: 2019-05-07T14:39:47.661Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / box-com-content-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'search'
 * Endpoint Path: '/search'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "query",
    "scope",
    "file_extensions",
    "created_at_range",
    "updated_at_range",
    "size_range",
    "owner_user_ids",
    "ancestor_folder_ids",
    "content_types",
    "type",
    "trash_content",
    "mdfilters",
    "limit",
    "offset"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "query": "query",
    "scope": "scope",
    "file_extensions": "file_extensions",
    "created_at_range": "created_at_range",
    "updated_at_range": "updated_at_range",
    "size_range": "size_range",
    "owner_user_ids": "owner_user_ids",
    "ancestor_folder_ids": "ancestor_folder_ids",
    "content_types": "content_types",
    "type": "type",
    "trash_content": "trash_content",
    "mdfilters": "mdfilters",
    "limit": "limit",
    "offset": "offset"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['OAuth2Security'] = {token: cfg['OAuth2Security']};

    let callParams = {
        spec: spec,
        operationId: 'search',
        pathName: '/search',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}