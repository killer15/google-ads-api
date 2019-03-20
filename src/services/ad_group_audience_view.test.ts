// Auto Generated File! Do Not Edit.

// @ts-ignore
import { AdGroupAudienceView } from 'google-ads-node/build/lib/resources'

// @ts-ignore
import { newCustomer, BUDGET_ID, CID, getRandomName } from '../test_utils'
const customer = newCustomer()

describe('AdGroupAudienceView', async () => {

    describe('reporting', async () => {
        it('can retrieve a list of AdGroupAudienceViews with all fields (if valid)', async () => {
            const ad_group_audience_views = await customer.adGroupAudienceViews.list()
            expect(ad_group_audience_views).toBeInstanceOf(Array)

            // @ts-ignore Ignore missing proto definitions for now
            if(ad_group_audience_views.length > 0 && ad_group_audience_views[0].ad_group_audience_view.resource_name) {
                expect(ad_group_audience_views[0].ad_group_audience_view).toEqual(
                    expect.objectContaining({
                        resource_name: expect.stringContaining(`customers/${CID}/adGroupAudienceViews`) || '',
                    })
                )

                // @ts-ignore Ignore missing proto definitions for now
                const resource = ad_group_audience_views[0].ad_group_audience_view.resource_name

                if(resource) {
                    const singleton = await customer.adGroupAudienceViews.get(resource)
                    expect(singleton).toBeInstanceOf(Object)
                    expect(singleton).toEqual(
                        expect.objectContaining({
                            resource_name: expect.stringContaining(`customers/${CID}/adGroupAudienceViews`) || '',
                        })
                    )
                }
            }
        })

        it('throws an error when the request is invalid', async () => {
            await expect(
                customer.adGroupAudienceViews.list({
                    limit: -10,
                    constraints: ['FakeConstraint=INVALID'],
                })
            ).rejects.toThrow('Unrecognized field')
        })
    })

})
