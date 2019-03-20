// Auto Generated File! Do Not Edit.

// @ts-ignore
import { ProductGroupView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('ProductGroupView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of ProductGroupViews with all fields (if valid)', async () => {
            const product_group_views = await customer.productGroupViews.list()
            expect(product_group_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(product_group_views.length > 0 && product_group_views[0].product_group_view.resource_name) {
                expect(product_group_views[0].product_group_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/productGroupViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = product_group_views[0].product_group_view.resource_name

                if(resource) {
                    const singleton = await customer.productGroupViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/productGroupViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.productGroupViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
