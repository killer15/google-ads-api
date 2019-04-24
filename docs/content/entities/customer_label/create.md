---
title: Create CustomerLabel
order: 4
type: create
entity: CustomerLabel
---

This section describes how to create a CustomerLabel.

```javascript
// Creating the entity

const customer_label = {
    // Your CustomerLabel here, without immutable fields such as resource_name
}

const results = await customer.customerLabels.create(customer_label)

console.log(results) // ['customers/1234567890/customerLabels/123123123']
```