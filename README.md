# ![LOGO](logo.png) Box 2.0 **flow**ground Connector

## Description

A generated **flow**ground connector for the Box 2.0 API (version 2.0).

Generated from: https://api.apis.guru/v2/specs/box.com/content/2.0/swagger.json<br/>
Generated at: 2019-05-07T17:39:47+03:00

## API Description

The Box Content API gives you access to secure content management and content experience features for use in your own app. It strives to be RESTful and is organized around the main resources you’re familiar with from the Box web interface.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Pending Collaborations

> Used to retrieve all pending collaboration invites for this user.

*Tags:* `Collaborations`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response
* `status` - _required_ - Must be 'pending'
    Possible values: pending.

### Create Collaboration

> Used to add a collaboration for a single user or a single group to a folder. Either an email address, a user ID, or a group id can be used to create the collaboration. If the collaboration is being created with a group, access to this endpoint is granted based on the group's invitability_level.

*Tags:* `Collaborations`

### Delete Collaboration

> Used to delete a single collaboration.

*Tags:* `Collaborations`

#### Input Parameters
* `COLLAB_ID` - _required_

### Get Collaboration

> Used to get information about a single collaboration. All collaborations for a single folder can be retrieved through GET /folders/{id}/collaborations. A complete list of the user's pending collaborations can also be retrieved.

*Tags:* `Collaborations`

#### Input Parameters
* `COLLAB_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `status` - _optional_ - Can only be pending
    Possible values: pending.

### Update Collaboration

> Used to edit an existing collaboration. Descriptions of the various roles can be found here.

*Tags:* `Collaborations`

#### Input Parameters
* `COLLAB_ID` - _required_

### Get Collections

> Retrieves the collections for the given user. Currently, only the favorites collection is supported.

*Tags:* `Collections`

### Get Collection Items

> Retrieves the files and/or folders contained within this collection. Collection item lists behave a lot like getting a folder's items.<br/>
> Paginated results can be retrieved using the limit and offset parameters.<br/>
> Sub-object fields can be requested via the ?fields parameter

*Tags:* `Collections`

#### Input Parameters
* `COLLECTION_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page.
* `offset` - _optional_ - The offset at which to begin the response. An offset of value of 0 will start at the beginning of the folder-listing. Offset of 2 would start at the 2nd record, not the second page. Note: If there are hidden items in your previous response, your next offset should be = offset + limit, not the # of records you received back.

### Create Comment

> Used to add a comment by the user to a specific file or comment (i.e. as a reply comment).

*Tags:* `Comments`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response.

### Delete Comment

> Permanently deletes a comment.

*Tags:* `Comments`

#### Input Parameters
* `COMMENT_ID` - _required_

### Get Comment

> Used to retrieve the message and metadata about a specific comment. Information about the user who created the comment is also included.

*Tags:* `Comments`

#### Input Parameters
* `COMMENT_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response.

### Update Comment

> Used to update the message of the comment.

*Tags:* `Comments`

#### Input Parameters
* `COMMENT_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response.

### Delete Device Pin

> Delete individual device pin.

*Tags:* `Devices`

#### Input Parameters
* `ID` - _required_

### Get Device Pin

> Gets information about an individual device pin.

*Tags:* `Devices`

#### Input Parameters
* `ID` - _required_

### Get Enterprise Device Pins

> Gets all the device pins within a given enterprise. Must be an enterprise admin with the manage enterprise scope to make this call.

*Tags:* `Devices`

#### Input Parameters
* `ENTERPRISE_ID` - _required_
* `marker` - _optional_ - Needs not be passed or can be empty for first invocation of the API. Use the one returned in response for each subsequent call.
* `limit` - _optional_ - Default value is 100. Max value is 10000
* `direction` - _optional_ - Default is "asc". Valid values are asc, desc. Case in-sensitive, ASC/DESC works just fine.

### User Events, Enterprise Events

> Use this to get events for a given user. A chunk of event objects is returned for the user based on the parameters passed in. Parameters indicating how many chunks are left as well as the next stream_position are also returned.<br/>
> <br/>
> To retrieve Enterprise Events specify 'stream_type=admin_logs'. Retrieves up to a year' events for all users in an enterprise. Upper and lower bounds as well as filters can be applied to the results.

*Tags:* `Events`

#### Input Parameters
* `stream_position` - _optional_ - The location in the event stream at which you want to start receiving events. Can specify special case 'now' to get 0 events and the latest stream position for initialization.
* `stream_type` - _optional_ - Limits the type of events returned: all: returns everything, changes: returns tree changes, sync: returns tree changes only for sync folders
    Possible values: all, changes, sync, admin_logs.
* `limit` - _optional_ - Limits the number of events returned
* `event_type` - _optional_ - A comma-separated list of events to filter by
* `created_after` - _optional_ - A lower bound on the timestamp of the events returned
* `created_before` - _optional_ - An upper bound on the timestamp of the events returned

### Long polling

> To get real-time notification of activity in a Box account, use the long poll feature of the /events API. To do so, first call the /events API with an OPTIONS call to retrieve the long poll URL to use. Next, make a GET request to the provided URL to begin listening for events. If an event occurs within an account you are monitoring, you will receive a response with the value new_change. It's important to note that this response will not come with any other details, but should serve as a prompt to take further action such as calling the /events endpoint with your last known stream_position. After sending this response, the server will close the connection and you will need to repeat the long poll process to begin listening for events again.<br/>
> If no events occur for a period of time after you make the GET request to the long poll URL, you will receive a response with the value reconnect. When you receive this response, you'll make another OPTIONS call to the /events endpoint and repeat the long poll process.<br/>
> If you receive no events in retry_timeout seconds, you should make another GET request to the real time server (i.e. URL in the response). This might be necessary in case you do not receive the reconnect message in the face of network errors.<br/>
> If you receive max_retries error when making GET requests to the real time server, you should make another OPTIONS request.

*Tags:* `Events`

### Get List of File Version Legal Holds

> Get list of non-deleted Holds for a single Policy.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `policy_id` - _required_

### Get File Version Legal Hold

> Get details of a single File Version Legal Hold.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ID` - _required_

### Get File Version Retentions

> Retrieves all file version retentions for the given enterprise.

*Tags:* `Files`

#### Input Parameters
* `file_id` - _optional_ - A file id to filter the file version retentions by.
* `file_version_id` - _optional_ - A file version id to filter the file version retentions by.
* `policy_id` - _optional_ - A policy id to filter the file version retentions by.
* `disposition_action` - _optional_ - The disposition action of the retention policy. This action can be permanently_delete, which will cause the content retained by the policy to be permanently deleted, or remove_retention, which will lift the retention policy from the content, allowing it to be deleted by users, once the retention policy time period has passed.
    Possible values: permanently_delete, remove_retention.
* `disposition_before` - _optional_ - See content times for formatting
* `disposition_after` - _optional_ - See content times for formatting
* `limit` - _optional_ - The maximum number of items to return in a page
* `marker` - _optional_ - Base 64 encoded string that represents where the paging should being. It should be left blank to begin paging.

### Get File Version Retention

> Used to retrieve information about a file version retention

*Tags:* `Files`

#### Input Parameters
* `FILE_VERSION_RETENTION_ID` - _required_

### File upload preflight check

> The Pre-flight check API will verify that a file will be accepted by Box before you send all the bytes over the wire.

*Tags:* `Files`

### Delete File

> Discards a file to the trash. The etag of the file can be included as an 'If-Match' header to prevent race conditions.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `If-Match` - _optional_ - The etag of the file. This is in the 'etag' field of the file object.

### Get File's Info, Get Embed Link

> Used to retrieve the metadata about a file.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response.

### Restore Item

> Restores an item that has been moved to the trash. Default behavior is to restore the item to the folder it was in before it was moved to the trash. If that parent folder no longer exists or if there is now an item with the same name in that parent folder, the new parent folder and/or new name will need to be included in the request.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_

### Update File Info, Lock and Unlock, Create Shared Link

> Used to update individual or multiple fields in the file object, including renaming the file, changing its description, and creating a shared link for the file. To move a file, change the ID of its parent folder. An optional If-Match header can be included to prevent race conditions.<br/>
> <br/>
> To lock and unlock files, you execute a PUT operation on the /files/{file id} endpoint and set or clear the lock properties on the file.<br/>
> <br/>
> Used to create a shared link for this particular file. Please see here for more information on the permissions available for shared links. In order to get default shared link status, set it to an empty access level, i.e. {"shared_link": {}}. In order to disable a shared link, send this same type of PUT request with the value of shared_link set to null, i.e. {"shared_link": null}

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `If-Match` - _optional_ - The etag of the file can be included as an 'If-Match' header to prevent race conditions.

### Get File's Collaborations

> Use this to get a list of all the collaborations on a file

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page
* `offset` - _optional_ - The item at which to begin the response

### Get File's Comments

> Retrieves the comments on a particular file, if any exist.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Download File

> Retrieves the actual data of the file. An optional version parameter can be set to download a previous version of the file.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `Range` - _optional_ - The range value in bytes. Format should be bytes={start_range}-{end_range}
* `version` - _optional_ - The ID specific version of this file to download.
* `BoxApi` - _optional_ - The shared link for this item. Format should be shared_link=SHARED_LINK

### Copy File

> Used to create a copy of a file in another folder. The original version of the file will not be altered.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_

### Get all Metadata on File

> Used to retrieve all metadata associated with a given file

*Tags:* `Metadata`

#### Input Parameters
* `FILE_ID` - _required_

### Delete Metadata on File

> Used to delete the template instance. To delete custom key:value pairs within a template instance, you should refer to the updating metadata section.

*Tags:* `Metadata`

#### Input Parameters
* `FILE_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Get Metadata on File

> Used to retrieve the metadata template instance for a corresponding Box file.

*Tags:* `Metadata`

#### Input Parameters
* `FILE_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Create Metadata on File

> Used to create the metadata template instance for a corresponding Box file. When creating metadata, only values that adhere to the metadata template schema will be accepted.

*Tags:* `Metadata`

#### Input Parameters
* `FILE_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Update Metadata on File

> Used to update the template instance. The request body must follow the JSON-Patch specification, which is represented as a JSON array of operation objects (see examples for more details). Updates can be either add, replace, remove , test, move, or copy. The template instance can only be updated if the template instance already exists. When editing metadata, only values that adhere to the metadata template schema will be accepted.<br/>
> The update is applied atomically. If any errors occur during the application of the update operations, the metadata instance remains unchanged.

*Tags:* `Metadata`

#### Input Parameters
* `FILE_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Get File's Tasks

> Retrieves all of the tasks for given file.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Thumbnail

> Retrieves a thumbnail, or smaller image representation, of this file. Sizes of 32x32,64x64, 128x128, and 256x256 can be returned in the .png format and sizes of 32x32, 94x94, 160x160, and 320x320 can be returned in the .jpg format. Thumbnails can be generated for the image and video file formats listed here.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `EXTENSION` - _required_ - The preview format, e.g. png or jpg
* `min_height` - _optional_ - The minimum height of the thumbnail
* `min_width` - _optional_ - The minimum width of the thumbnail
* `max_height` - _optional_ - The maximum height of the thumbnail
* `max_width` - _optional_ - The maximum width of the thumbnail

### Permanently Delete

> Permanently deletes an item that is in the trash. The item will no longer exist in Box. This action cannot be undone.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_

### Get Trashed File

> Retrieves an item that has been moved to the trash.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_

### View Versions

> If there are previous versions of this file, this method can be used to retrieve information about the older versions. (Versions are only tracked for Box users with premium accounts.)

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Promote Version

> If there are previous versions of this file, this method can be used to promote one of the older versions to the top of the stack. This actually mints a copy of the old version and puts it on the top of the versions stack. The file will have the exact same contents, the same SHA1/etag, and the same name as the original. Other properties such as comments do not get updated to their former values.

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_

### Delete Old Version

> Discards a specific file version to the trash. (Depending on the enterprise settings for this user, the item will either be actually deleted from Box or moved to the trash.)

*Tags:* `Files`

#### Input Parameters
* `FILE_ID` - _required_
* `VERSION_ID` - _required_
* `If-Match` - _optional_ - The etag of the file. This is in the 'etag' field of the file object.

### Remove Watermark on File

> Used to remove the watermark for a corresponding Box file.

*Tags:* `Watermark`

#### Input Parameters
* `FILE_ID` - _required_

### Get Watermark on File

> Used to retrieve the watermark for a corresponding Box file.

*Tags:* `Watermark`

#### Input Parameters
* `FILE_ID` - _required_

### Apply Watermark on File

> Used to apply or update the watermark for a corresponding Box file. The endpoint accepts a JSON body describing the watermark to apply.

*Tags:* `Watermark`

#### Input Parameters
* `FILE_ID` - _required_

### Create Folder

> Used to create a new empty folder. The new folder will be created inside of the specified parent folder

*Tags:* `Folders`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Trashed Items

> Retrieves the files and/or folders that have been moved to the trash. Any attribute in the full files or folders objects can be passed in with the fields parameter to get specific attributes, and only those specific attributes back; otherwise, the mini format is returned for each item by default. Multiple attributes can be passed in separated by commas e.g. fields=name,created_at. Paginated results can be retrieved using the limit and offset parameters.

*Tags:* `Folders`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return
* `offset` - _optional_ - The item at which to begin the response

### Delete Folder

> Used to delete a folder. A recursive parameter must be included in order to delete folders that have items inside of them. An optional If-Match header can be included to ensure that client only deletes the folder if it knows about the latest version.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `recursive` - _optional_
* `If-Match` - _optional_ - This is in the 'etag' field of the folder object.

### Get Folder's Info

> Retrieves the full metadata about a folder, including information about when it was last updated as well as the files and folders contained in it. The root folder of a Box account is always represented by the id "0".

*Tags:* `Folders`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response
* `FOLDER_ID` - _required_

### Restore Folder

> Restores an item that has been moved to the trash. Default behavior is to restore the item to the folder it was in before it was moved to the trash. If that parent folder no longer exists or if there is now an item with the same name in that parent folder, the new parent folder and/or new name will need to be included in the request.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update Folder, Create Shared Link, Create or Delete

> Used to update information about the folder. To move a folder, update the ID of its parent. To enable an email address that can be used to upload files to this folder, update the folder_upload_email attribute. An optional If-Match header can be included to ensure that client only updates the folder if it knows about the latest version.<br/>
> <br/>
> Used to create a shared link for this particular folder. Please see here for more information on the permissions available for shared links. In order to get default shared link status, set it to an empty access level, i.e. {"shared_link": {}}. In order to disable a shared link, send this same type of PUT request with the value of shared_link set to null, i.e. {"shared_link": null}<br/>
> <br/>
> To add or remove an item from a collection, you do a PUT on that item and change the list of collections it belongs to. Philosophically, this is similar to the way "move" operations work on files and folders: you do a PUT on the item and change its parent. It's the same idea with collections, except you're changing which collection(s) the item belongs to instead of the folder it belongs to. Currently the only collection available is the favorites collection, and you'll need to know it's ID for the user that is making the API call, since every user has a different favorites collection_id.<br/>
> The Add/Remove API handling will check all ids passed in before performing any add/removal operations. If any collection ids are malformed or do not exist in the user's account, the API call will throw a 400. Only if all of the collection ids are valid will the adds and removals be carried out.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `If-Match` - _optional_ - This is in the 'etag' field of the folder object.

### Get Folder Collaborations

> Use this to get a list of all the collaborations on a folder i.e. all of the users that have access to that folder.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page. The default is 100 and the max is 1000.
* `offset` - _optional_ - The item at which to begin the response

### Copy Folder

> Used to create a copy of a folder in another folder. The original version of the folder will not be altered.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Folder's Items

> Retrieves the files and/or folders contained within this folder without any other metadata about the folder. Any attribute in the full files or folders objects can be passed in with the fields parameter to get specific attributes, and only those specific attributes back; otherwise, the mini format is returned for each item by default. Multiple attributes can be passed in separated by commas e.g. fields=name,created_at. Paginated results can be retrieved using the limit and offset parameters.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page. The default is 100 and the max is 1000.
* `offset` - _optional_ - The offset at which to begin the response. An offset of value of 0 will start at the beginning of the folder-listing. Note: If there are hidden items in your previous response, your next offset should be = offset + limit, not the # of records you received back. The default is 0.

### Get All Metadata on Folder

> Used to retrieve all metadata associated with a given folder

*Tags:* `Metadata`

#### Input Parameters
* `FOLDER_ID` - _required_

### Delete Metadata on Folder

> Used to delete the template instance. To delete custom key:value pairs within a template instance, you should refer to the updating metadata section.

*Tags:* `Metadata`

#### Input Parameters
* `FOLDER_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Get Metadata on Folder

> Used to retrieve the metadata template instance for a corresponding Box folder.

*Tags:* `Metadata`

#### Input Parameters
* `FOLDER_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Create Metadata on Folder

> Used to create the metadata template instance for a corresponding Box folder. When creating metadata, only values that adhere to the metadata template schema will be accepted.

*Tags:* `Metadata`

#### Input Parameters
* `FOLDER_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Update Metadata on Folder

> Used to update the template instance. Updates can be either add, replace, remove , or test. The template instance can only be updated if the template instance already exists. When editing metadata, only values that adhere to the metadata template schema will be accepted.

*Tags:* `Metadata`

#### Input Parameters
* `FOLDER_ID` - _required_
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Permanently Delete

> Permanently deletes an folder that is in the trash. The item will no longer exist in Box. This action cannot be undone.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_

### Get Trashed Folder

> Retrieves an folder that has been moved to the trash.

*Tags:* `Folders`

#### Input Parameters
* `FOLDER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Remove Watermark on Folder

> Used to remove the watermark for a corresponding Box Folder.

*Tags:* `Watermark`

#### Input Parameters
* `FOLDER_ID` - _required_

### Get Watermark on Folder

> Used to retrieve the watermark for a corresponding Box folder.

*Tags:* `Watermark`

#### Input Parameters
* `FOLDER_ID` - _required_

### Apply Watermark on Folder

> Used to apply or update the watermark for a corresponding Box folder. The endpoints accepts a JSON body describing the watermark to apply.

*Tags:* `Watermark`

#### Input Parameters
* `FOLDER_ID` - _required_

### Create Membership

> Used to add a member to a Group.

*Tags:* `Groups`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response

### Delete Membership

> Deletes a specific group membership.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_MEMBERSHIP_ID` - _required_

### Get Membership

> Fetches a specific group membership entry.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_MEMBERSHIP_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update Membership

> Used to update a group membership.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_MEMBERSHIP_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Groups for an Enterprise

> Retrieves all of the groups for given enterprise. Must have permissions to see an enterprise's groups.

*Tags:* `Groups`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page. The default is 100 and the max is 1000.
* `offset` - _optional_ - The item at which to begin the response.

### Create Group

> Used to create a group.

*Tags:* `Groups`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response

### Delete Group

> Permanently deletes a specific group.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_ID` - _required_

### Get Group

> Used to get information about a group.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update Group

> Updates a specific group.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Collaborations for Group

> Retrieves all of the group collaborations for a given group. Note this is only available to group admins.

*Tags:* `Groups`

#### Input Parameters
* `GROUP_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page. The default is 100 and the max is 1000.
* `offset` - _optional_ - The item at which to begin the response.

### Get Memberships for Group

> Retrieves all of the members for a given group if the requesting user has access (see Group Object member_viewability_level).

*Tags:* `Groups`

#### Input Parameters
* `GROUP_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - The maximum number of items to return in a page. The default is 100 and the max is 1000.
* `offset` - _optional_ - The item at which to begin the response.

### Invite User

> Invites an existing user to join an Enterprise. The existing user can not be part of another Enterprise and must already have a Box account. Once invited, the user will receive an email and prompt to accept the invitation within the Box web application. This method requires the "Manage An Enterprise" scope for the enterprise, which can be enabled within your developer console.

*Tags:* `Users`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response

### Get status of the invite

*Tags:* `Users`

#### Input Parameters
* `INVITE_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Legal Hold Policies

> Get a list of Legal Hold Policies that belong to your Enterprise.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `policy_name` - _optional_ - Case insensitive prefix-match filter on Policy name.
* `limit` - _optional_ - Limit result size to this number. Defaults to 100, maximum is 1,000.
* `marker` - _optional_ - Take from next_marker column of a prior call to get the next page

### Create New Legal Hold Policy

> Create a new Legal Hold Policy. Optional date filter may be passed. If Policy has a date filter, any Custodian assignments will apply only to file versions created or uploaded inside of the date range.

*Tags:* `Legal Hold Policies`

### Delete Legal Hold Policy

> Sends request to delete an existing Legal Hold Policy. Note that this is an asynchronous process - the Policy will not be fully deleted yet when the response comes back.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ID` - _required_

### Get Legal Hold Policy

> Get details of a single Legal Hold Policy

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ID` - _required_

### Update Existing Legal Hold Policy

> Update existing Legal Hold Policy. Only name and description can be modified.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ID` - _required_

### Get Legal hold policy assignments

> Get list of assignments for a single Policy.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ID` - _required_

### Create New Legal Hold Policy Assignment

> Create a new Assignment, which will apply the Legal Hold Policy to the target of the Assignment.

*Tags:* `Legal Hold Policies`

### Delete Legal Hold Policy Assignment

> Sends request to delete an existing Assignment. Note that this is an asynchronous process - the Assignment will not be fully deleted yet when the response comes back.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ASSIGNMENT_ID` - _required_

### Get Legal Hold Policy Assignment

> Get details of a single assignment.

*Tags:* `Legal Hold Policies`

#### Input Parameters
* `ASSIGNMENT_ID` - _required_

### Create Metadata Template

> Used to create a new metadata template with the specified schema.

*Tags:* `Metadata`

### Get Enterprise Metadata

> Used to retrieve all metadata templates within a user's enterprise. Currently only the enterprise scope is supported.

*Tags:* `Metadata`

#### Input Parameters
* `SCOPE` - _required_

### Get Metadata Template

> Used to retrieve the schema for a given metadata template.

*Tags:* `Metadata`

#### Input Parameters
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Update Metadata Template

> Used to update the schema of an existing template.

*Tags:* `Metadata`

#### Input Parameters
* `SCOPE` - _required_
* `TEMPLATE` - _required_

### Get Retention Policies

> Retrieves all of the retention policies for the given enterprise.

*Tags:* `Retention Policies`

#### Input Parameters
* `policy_name` - _optional_ - A name to filter the retention policies by. A trailing partial match search is performed.
* `policy_type` - _optional_ - A policy type to filter the retention policies by.
    Possible values: finite, indefinite.
* `created_by_user_id` - _optional_ - A user id to filter the retention policies by.

### Create Retention Policy

> Used to create a new retention policy.

*Tags:* `Retention Policies`

### Get Retention Policy

> Used to retrieve information about a retention policy

*Tags:* `Retention Policies`

#### Input Parameters
* `POLICY_ID` - _required_

### Update Retention Policy

> Used to update a retention policy.

*Tags:* `Retention Policies`

#### Input Parameters
* `POLICY_ID` - _required_

### Get Retention Policy Assignments

> Returns a list of all retention policy assignments associated with a specified retention policy.

*Tags:* `Retention Policies`

#### Input Parameters
* `POLICY_ID` - _required_
* `type` - _optional_ - The type of the retention policy assignment to retrieve. Can either be folder or enterprise.
    Possible values: folder, enterprise.

### Create Retention Policy Assignment

> Returns a list of all retention policy assignments associated with a specified retention policy.

*Tags:* `Retention Policies`

### Get Retention Policy Assignment

> Used to retrieve information about a retention policy assignment.

*Tags:* `Retention Policies`

#### Input Parameters
* `RETENTION_POLICY_ASSIGNMENT_ID` - _required_

### Searching for Content

> The search endpoint provides a powerful way of finding items that are accessible by a single user or an entire enterprise. Leverage the parameters listed below to generate targeted advanced searches.

*Tags:* `Search`

#### Input Parameters
* `query` - _required_ - The string to search for; can be matched against item names, descriptions, text content of a file, and other fields of the different item types.
* `scope` - _optional_ - The scope for which you want to limit your search to. Can be user_content for a search limited to only the current user or enterprise_content for the entire enterprise. To enable the enterprise_content scope for an administrator, please contact us.
* `file_extensions` - _optional_ - Limit searches to specific file extensions like pdf,png,doc. Requires one or a set of comma delimited file extensions: file_extension_1,file_extension_2,....
* `created_at_range` - _optional_ - The date for when the item was created. Specify the date range by using RFC3339 timestamp variables separated by a comma: from_date,to_date (e.g 2014-05-15T13:35:01-07:00,2014-05-17T13:35:01-07:00). Trailing from_date, and leading ,to_date commas are also accepted, where the current date and earliest known date will be designated respectively.
* `updated_at_range` - _optional_ - The date for when the item was last updated. Specify the date range by using RFC3339 variables separated by a comma: from_date,to_date(e.g 2014-05-15T13:35:01-07:00,2014-05-17T13:35:01-07:00). Trailing from_date, and leading ,to_date commas are also accepted, where the current date and earliest known date will be designated respectively.
* `size_range` - _optional_ - Filter by a file size range. Specify the file size range in bytes separated by a comma:lower_bound_size,upper_bound_size, where 1MB is equivalent to 1000000 bytes. Trailing lower_bound_size, and leading ,upper_bound_size commas are also accepted as parameters.
* `owner_user_ids` - _optional_ - Search by item owners. Requires one or a set of comma delimited user_ids: user_id_1,user_id_2,...
* `ancestor_folder_ids` - _optional_ - Limit searches to specific parent folders. Requires one or a set of comma delimited folder_ids: folder_id_1,folder_id_2,.... Parent folder results will also include items within subfolders.
* `content_types` - _optional_ - Limit searches to specific Box designated content types. Can be name, description, file_content, comments, or tags. Requires one or a set of comma delimited content_types: content_type_1,content_type_2,....
* `type` - _optional_ - The type you want to return in your search. Can be file, folder, or web_link.
    Possible values: file, folder, web_link.
* `trash_content` - _optional_ - Allows you to search within the trash. Can be trashed_only or non_trashed_only. Searches without this parameter default to non_trashed_only.
* `mdfilters` - _optional_ - Filters for a specific metadata template for files with metadata object associations. The filters are to be placed in a single JSON object. Please refer the MDFilters object in the definitions section of the swagger.json
* `limit` - _optional_ - Number of search results to return. The default is 30 and the max is 200.
* `offset` - _optional_ - The search result at which to start the response. The default is 0.

### Shared Items

> Shared items are any files or folders that are represented by a shared link. Shared items are different from other API resources in that a shared resource doesn't necessarily have to be in the account of the user accessing it. The actual shared link itself is used along with a normal access token.<br/>
> Used to retrieve the metadata about a shared item when only given a shared link. Because of varying permission for shared links, a password may be required to retrieve the shared item. Once the item has been retrieved, you can make API requests against the actual resource /files/{id} or /folders/{id} as long as the shared link and optional password are in the header.

*Tags:* `Shared Items`

#### Input Parameters
* `BoxApi` - _required_ - The usage is 'BoxApi: shared_link=SHARED_LINK&shared_link_password=SHARED_LINK_PASSWORD'

### Create Task Assignment

> Used to assign a task to a single user. There can be multiple assignments on a given task.

*Tags:* `Tasks`

### Delete Task Assignment

> Deletes a specific task assignment.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ASSIGNMENT_ID` - _required_

### Get Task Assignment

> Fetches a specific task assignment.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ASSIGNMENT_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update Task Assignment

> Used to update a task assignment.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ASSIGNMENT_ID` - _required_

### Create Task

> Used to create a single task for single user on a single file.

*Tags:* `Tasks`

### Delete Task

> Permanently deletes a specific task.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ID` - _required_

### Get Task

> Fetches a specific task.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update Task

> Updates a specific task.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Assignments

> Retrieves all of the assignments for a given task.

*Tags:* `Tasks`

#### Input Parameters
* `TASK_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Enterprise Users

> Returns a list of all users for the Enterprise along with their user_id, public_name, and login.

*Tags:* `Users`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response
* `filter_term` - _optional_ - A string used to filter the results to only users starting with the filter_term in either the name or the login.
* `limit` - _optional_ - The number of records to return. The default is 100 and the max is 1000.
* `offset` - _optional_ - The record at which to start. The default is 0.
* `user_type` - _optional_ - The type of user to search for. Valid values are all, external or managed.  If nothing is provided, the default behavior will be managed only
    Possible values: all, external, managed.

### Create User

> Used to provision a new user in an enterprise. This method only works for enterprise admins.

*Tags:* `Users`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Current User

> Retrieves information about the user who is currently logged in i.e. the user for whom this auth token was generated.

*Tags:* `Users`

#### Input Parameters
* `fields` - _optional_ - Attribute(s) to include in the response

### Delete User

> Deletes a user in an enterprise account.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_
* `notify` - _optional_
* `force` - _optional_

### Get User's Info

> Retrieves information about a user in the enterprise. Requires enterprise administration authorization.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update User, Change User's Login

> Used to edit the settings and information about a user. This method only works for enterprise admins. To roll a user out of the enterprise (and convert them to a standalone free user), update the special enterprise attribute to be null.<br/>
> <br/>
> Used to convert one of the user's confirmed email aliases into the user's primary login.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Email Aliases

> Retrieves all email aliases for this user. The collection of email aliases does not include the primary login for the user; use GET /users/USER_ID to retrieve the login email address.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_

### Add Email Alias

> Adds a new email alias to the given user's account.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_

### Delete Email Alias

> Removes an email alias from a user.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_
* `EMAIL_ALIAS_ID` - _required_

### Move User's Folder

> Moves all of the owned content from within one user's folder into a new folder in another user's account. You can move folders across users as long as the you have administrative permissions and the 'source' user owns the folders. To move everything from the root folder, use "0" which always represents the root folder of a Box account.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_
* `FOLDER_ID` - _required_
* `notify` - _optional_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Memberships for User

> Retrieves all of the group memberships for a given user. Note this is only available to group admins. To retrieve group memberships for the user making the API request, use the users/me/memberships endpoint.

*Tags:* `Users`

#### Input Parameters
* `USER_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response
* `limit` - _optional_ - Default is 100. Max is 1000
* `offset` - _optional_ - The item at which to begin the response

### Create Web Link

> Creates a web link object within a given folder.

*Tags:* `Web Links`

### Delete Web Link

> Deletes a web link and moves it to the trash

*Tags:* `Web Links`

#### Input Parameters
* `WEB_LINK_ID` - _required_

### Get Web Link

> Use to get information about the web link.

*Tags:* `Web Links`

#### Input Parameters
* `WEB_LINK_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Update Web Link

> Updates information for a web link.

*Tags:* `Web Links`

#### Input Parameters
* `WEB_LINK_ID` - _required_
* `fields` - _optional_ - Attribute(s) to include in the response

### Get Webhooks

> Returns all defined webhooks for the requesting application and user, up to the limit. If no limit is supplied then Box uses the default limit of 100.<br/>
> If more than limit webhooks are defined then Box returns the webhooks in batches. When the results are batched, Box sends limit webhooks along with a next_marker field in the response object. The value of the next_marker field is a marker string that you can use in later requests to tell Box which batch to send next.<br/>
> When you send a request that includes a marker string, Box sends the next batch of webhooks, beginning after the last webhook of the previous batch. When the response contains the last of the defined webhooks, Box omits the next_marker field from its response.<br/>
> You can use limit and marker together with the marker string returned in the next_marker field to paginate lists of webhooks.

*Tags:* `Webhooks`

#### Input Parameters
* `limit` - _optional_ - The maximum number of webhooks to return per page
* `marker` - _optional_ - A marker string returned by Box if the result contains less than the full number of webhooks that are defined

### Create Webhook

*Tags:* `Webhooks`

### Delete Webhook

> Permanently deletes a webhook

*Tags:* `Webhooks`

#### Input Parameters
* `WEBHOOK_ID` - _required_

### Get Webhook

> Get a Webhook

*Tags:* `Webhooks`

#### Input Parameters
* `WEBHOOK_ID` - _required_

### Update Webhook

> Update a Webhook

*Tags:* `Webhooks`

#### Input Parameters
* `WEBHOOK_ID` - _required_

## License

**flow**ground :- Telekom iPaaS / box-com-content-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
