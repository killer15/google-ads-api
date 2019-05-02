---
title: Get FeedItem
order: 2
type: get
entity: FeedItem
---

### Get a FeedItem

The `customer.feedItems.get(resource_name)` method returns the FeedItem identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that FeedItem

#### Returns

Returns that FeedItem as an object.