import React from 'react';

class SvgContainer extends React.Component {

    render() {
        return (
            <div hidden>
                <svg xmlns="http://www.w3.org/2000/svg">

                    <symbol id="icon_help"> {/* viewBox="0 0 24 24" */}
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
                    </symbol>

                    <symbol id="icon_search"> {/*viewBox="0 0 24 24"*/}
                        <path d="M15.5,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C16,5.9,13.1,3,9.5,3S3,5.9,3,9.5S5.9,16,9.5,16 c1.6,0,3.1-0.6,4.2-1.6l0.3,0.3v0.8l5,5l1.5-1.5L15.5,14z M9.5,14C7,14,5,12,5,9.5S7,5,9.5,5S14,7,14,9.5S12,14,9.5,14z"/>
                    </symbol>

                    <symbol id="icon_notifications"> {/*viewBox="0 0 24 24"*/}
                        <path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z M18,16v-5c0-3.1-1.6-5.6-4.5-6.3V4c0-0.8-0.7-1.5-1.5-1.5 S10.5,3.2,10.5,4v0.7C7.6,5.4,6,7.9,6,11v5l-2,2v1h16v-1L18,16z"/>
                    </symbol>

                    <symbol id="icon_del"> {/*viewBox="0 0 24 24"*/}
                        <path class="st0" d="M6,19c0,1.1000004,0.9000001,2,2,2h8c1.1000004,0,2-0.8999996,2-2V7H6V19z M19,4h-3.5l-1-1h-5l-1,1H5v2h14V4z" />
                    </symbol>

                    <symbol id="icon_edit"> {/*viewBox="0 0 24 24"*/}
                        <path class="st0" d="M3,17.25V21h3.75L17.8099995,9.9399996l-3.75-3.75L3,17.25z M20.7099991,7.04 c0.3899994-0.3899999,0.3899994-1.02,0-1.4099998l-2.3400002-2.3399999c-0.3899994-0.3900001-1.0200005-0.3900001-1.4099998,0 l-1.8299999,1.8300002l3.75,3.7500005C18.8799992,8.8700008,20.7099991,7.0400009,20.7099991,7.04z"/>
                    </symbol>

                    <symbol id="icon_checkbox"> {/*viewBox="0 0 459 459"*/}
                        <path d="M408,0H51C22.95,0,0,22.95,0,51v357c0,28.05,22.95,51,51,51h357c28.05,0,51-22.95,51-51V51C459,22.95,436.05,0,408,0z M178.5,357L51,229.5l35.7-35.7l91.8,91.8L372.3,91.8l35.7,35.7L178.5,357z"/>
                    </symbol>

                    <symbol id="icon_close"> {/*viewBox="0 0 15 15"*/}
                        <polygon points="10.3000002,4 7.5,6.8000002 4.6999998,4 4,4.6999998 6.8000002,7.5 4,10.3000002 4.6999998,11 7.5,8.1999998 10.3000002,11 11,10.3000002 8.1999998,7.5 11,4.6999998 "/>
                    </symbol>

                    <symbol id="icon_arrow_left"> {/*viewBox="0 0 18 18"*/}
                        <path d="M15.4099998,16.0900002L10.8299999,11.5l4.5799999-4.5900002L14,5.5l-6,6l6,6L15.4099998,16.0900002z"/>
                    </symbol>

                    <symbol id="icon_arrow_right"> {/*viewBox="0 0 18 18"*/}
                        <path d="M8.5900002,16.3400002L13.1700001,11.75L8.5900002,7.1599998L10,5.75l6,6l-6,6L8.5900002,16.3400002z"/>
                    </symbol>

                    <symbol id="icon_radio_btn"> {/*viewBox="0 0 24 24"*/}
                        <path class="st0" d="M12,7c-2.7600002,0-5,2.2399998-5,5s2.2399998,5,5,5s5-2.2399998,5-5S14.7600002,7,12,7z M12,2"/>
                    </symbol>

                    <symbol id="icon_sent"> {/*viewBox="0 0 24 24"*/}
                        <path class="st0" d="M2.01,21L23,12L2.01,3L2,10l15,2L2,14L2.01,21z"/>
                    </symbol>

                    <symbol id="icon_open"> {/*viewBox="0 0 24 24"*/}
                        <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/>
                    </symbol>

                    <symbol id="icon_note_add"> {/*viewBox="0 0 24 24"*/}
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>
                    </symbol>


                </svg>
            </div>
        );
    }
}

export default SvgContainer;
