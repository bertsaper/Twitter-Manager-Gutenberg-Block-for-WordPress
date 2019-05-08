import { TextControl } from '@wordpress/components';
import { SelectControl } from '@wordpress/components';
import './twitter-manager.view.scss';
import './twitter-manager.editor.scss';


const { __ } = wp.i18n;
const el = wp.element.createElement;
const iconEl = el('svg', { width: 20, height: 20 }, el('path', { d: "M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" })
);

const {
    registerBlockType,
} = wp.blocks;

const {
    InspectorControls,
} = wp.editor;

const { select } = wp.data;

registerBlockType('lm-ad-manger/twitter-manager', {
    title: 'Twitter Manager Block',
    icon: iconEl,
    category: 'common',

    attributes: {


        twitterAccountAddress: {
            type: 'string',
            default: 'https://twitter.com/'
        },

        twitterFeedLabel: {
            type: 'string',
            default: ''
        },

        twitterWidth: {
            type: 'string',
            default: '300'
        },

        twitterHeight: {
            type: 'string',
            default: '500'
        },

        twitterColor: {
            type: 'string',
            default: 'light'
        },

    },

    edit: (props) => {
        const {
            attributes: {
                twitterAccountAddress,
                twitterFeedLabel,
                twitterHeight,
                twitterWidth,
                twitterColor,
            },
            setAttributes,
        } = props;
        const onTwitterAccountAddress = (value) => {
            setAttributes({ twitterAccountAddress: value })
        };

        const onTwitterFeedLabel = (value) => {
            setAttributes({ twitterFeedLabel: value });
        };

        const onTwitterHeight = (value) => {
            setAttributes({ twitterHeight: value });
        };

        const onTwitterWidth = (value) => {
            setAttributes({ twitterWidth: value });
        };

        const onTwitterColor = (value) => {
            setAttributes({ twitterColor: value });
        };

        return (
            <div>
                <InspectorControls>
                    <div>
                        <p class="inspector-label">Ente a Feed Address</p>
                        <TextControl
                            value={twitterAccountAddress}
                            onChange={onTwitterAccountAddress}
                            placeholder="https://twitter.com/"
                        />
                    </div>
                    <div>
                        <p class="inspector-label">Feed Label</p>
                        <TextControl
                            value={twitterFeedLabel}
                            onChange={onTwitterFeedLabel}
                            placeholder="Heading"
                        />
                    </div>
                    <div>
                        <p><strong>Height and Width</strong>: Display area shows as gray box; to see the feed, please preview the page.</p>
                        <p>Height, in pixels, e.g.: 500</p>
                        <TextControl
                            value={twitterHeight}
                            onChange={onTwitterHeight}
                            placeholder="500"
                        />
                    </div>
                    <div>
                        <p>Width, in pixels, e.g.: 300</p>
                        <TextControl
                            value={twitterWidth}
                            onChange={onTwitterWidth}
                            placeholder="300"
                        />
                    </div>
                    <div>
                        <SelectControl
                            label={'Twitter Display Color'}
                            value={twitterColor}
                            options={
                                [
                                    { value: 'light', label: 'Light' },
                                    { value: 'dark', label: 'Dark' },
                                ]}
                            onChange={onTwitterColor}
                        />
                    </div>
                    <div>
                        <a href={twitterAccountAddress} target="_blank">Test Feed Link</a>
                    </div>

                </InspectorControls>
                <div style={{
                    width: twitterWidth + "px",
                    height: twitterHeight + "px",
                    backgroundColor: '#CCC',
                    display: 'block'
                }}>
                </div>
            </div>
        );
    },

    save(props) {

        const { attributes, } = props;

        return (

            <div>


                <a class="twitter-timeline" data-width={attributes.twitterWidth} data-height={attributes.twitterHeight} data-theme={attributes.twitterColor} href={attributes.twitterAccountAddress }></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div >
        );
    },
});