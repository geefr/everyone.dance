import React from 'react';

import "../styles/card_icon.scss"

const ICON_TYPE = {
    EDIT: 0,
    VISIBLE: 1,
    HIDDEN: 2,
    GOTO: 3,
    ROTATE_PORTRAIT: 4,
    ROTATE_LANDSCAPE: 5,
    MUSIC: 6,
    FACE: 7,
    STEPS: 8,
    FEET: 9,
    FOLDER: 10
}

class CardIcon extends React.Component {

    constructor (props)
    {
        super(props);
        this.state = 
        {
            icon_type: props.icon_type,
            color: props.color || "black",
            callback: props.callback
        }
    }

    handleOnClick()
    {
        if (typeof this.state.callback != 'undefined')
        {
            this.state.callback();
        }
    }

    getIcon()
    {
        switch (this.state.icon_type)
        {
            case ICON_TYPE.EDIT:
            {
                return <svg height="100%" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8875 5.8C23.375 5.3125 23.375 4.5 22.8875 4.0375L19.9625 1.1125C19.5 0.624997 18.6875 0.624997 18.2 1.1125L15.9 3.4L20.5875 8.0875L22.8875 5.8ZM0.75 18.5625V23.25H5.4375L19.2625 9.4125L14.575 4.725L0.75 18.5625Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.VISIBLE:
            {
                return <svg height="100%" width="100%" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 6.25C13.0054 6.25 12.0516 6.64509 11.3483 7.34835C10.6451 8.05161 10.25 9.00544 10.25 10C10.25 10.9946 10.6451 11.9484 11.3483 12.6517C12.0516 13.3549 13.0054 13.75 14 13.75C14.9946 13.75 15.9484 13.3549 16.6517 12.6517C17.3549 11.9484 17.75 10.9946 17.75 10C17.75 9.00544 17.3549 8.05161 16.6517 7.34835C15.9484 6.64509 14.9946 6.25 14 6.25ZM14 16.25C12.3424 16.25 10.7527 15.5915 9.58058 14.4194C8.40848 13.2473 7.75 11.6576 7.75 10C7.75 8.3424 8.40848 6.75269 9.58058 5.58058C10.7527 4.40848 12.3424 3.75 14 3.75C15.6576 3.75 17.2473 4.40848 18.4194 5.58058C19.5915 6.75269 20.25 8.3424 20.25 10C20.25 11.6576 19.5915 13.2473 18.4194 14.4194C17.2473 15.5915 15.6576 16.25 14 16.25ZM14 0.625C7.75 0.625 2.4125 4.5125 0.25 10C2.4125 15.4875 7.75 19.375 14 19.375C20.25 19.375 25.5875 15.4875 27.75 10C25.5875 4.5125 20.25 0.625 14 0.625Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.HIDDEN:
            {
                return <svg height="100%" width="100%" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7875 8.25L17.75 12.2V12C17.75 11.0054 17.3549 10.0516 16.6517 9.34835C15.9484 8.64509 14.9946 8.25 14 8.25H13.7875ZM8.4125 9.25L10.35 11.1875C10.2875 11.45 10.25 11.7125 10.25 12C10.25 12.9946 10.6451 13.9484 11.3483 14.6517C12.0516 15.3549 13.0054 15.75 14 15.75C14.275 15.75 14.55 15.7125 14.8125 15.65L16.75 17.5875C15.9125 18 14.9875 18.25 14 18.25C12.3424 18.25 10.7527 17.5915 9.58058 16.4194C8.40848 15.2473 7.75 13.6576 7.75 12C7.75 11.0125 8 10.0875 8.4125 9.25V9.25ZM1.5 2.3375L4.35 5.1875L4.9125 5.75C2.85 7.375 1.225 9.5 0.25 12C2.4125 17.4875 7.75 21.375 14 21.375C15.9375 21.375 17.7875 21 19.475 20.325L20.0125 20.85L23.6625 24.5L25.25 22.9125L3.0875 0.75L1.5 2.3375ZM14 5.75C15.6576 5.75 17.2473 6.40848 18.4194 7.58058C19.5915 8.75269 20.25 10.3424 20.25 12C20.25 12.8 20.0875 13.575 19.8 14.275L23.4625 17.9375C25.3375 16.375 26.8375 14.325 27.75 12C25.5875 6.5125 20.25 2.625 14 2.625C12.25 2.625 10.575 2.9375 9 3.5L11.7125 6.1875C12.425 5.9125 13.1875 5.75 14 5.75Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.GOTO:
            {
                return <svg height="100%" width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.25 0.75L0.75 10.1625V11.375L9.3 14.7L12.625 23.25H13.825L23.25 0.75Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.ROTATE_PORTRAIT:
            {
                return <svg height="100%" width="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9091 0H2.72727C2.00396 0 1.31026 0.287337 0.7988 0.7988C0.287337 1.31026 0 2.00396 0 2.72727V20.4545C0 21.1779 0.287337 21.8716 0.7988 22.383C1.31026 22.8945 2.00396 23.1818 2.72727 23.1818H4.09091V19.0909H2.72727V2.72727H10.9091V13.6364H13.6364V2.72727C13.6364 2.00396 13.349 1.31026 12.8376 0.7988C12.3261 0.287337 11.6324 0 10.9091 0ZM30 27.2727V19.0909C30 18.3676 29.7127 17.6739 29.2012 17.1624C28.6897 16.651 27.996 16.3636 27.2727 16.3636H9.54545C8.82214 16.3636 8.12844 16.651 7.61698 17.1624C7.10552 17.6739 6.81818 18.3676 6.81818 19.0909V27.2727C6.81818 27.996 7.10552 28.6897 7.61698 29.2012C8.12844 29.7127 8.82214 30 9.54545 30H27.2727C27.996 30 28.6897 29.7127 29.2012 29.2012C29.7127 28.6897 30 27.996 30 27.2727ZM10.9091 27.2727V19.0909H27.2727V27.2727H10.9091ZM30 12.2727H27.9545C27.9545 8.18182 25.4864 4.45909 21.7091 2.85L20.4545 5.45455L17.7273 0C20.9822 0 24.1038 1.29302 26.4054 3.5946C28.707 5.89618 30 9.0178 30 12.2727Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.ROTATE_LANDSCAPE:
            {
                return <svg height="100%" width="100%" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.25 0.25H2.75C2.08696 0.25 1.45107 0.513392 0.982233 0.982233C0.513392 1.45107 0.25 2.08696 0.25 2.75V19C0.25 19.663 0.513392 20.2989 0.982233 20.7678C1.45107 21.2366 2.08696 21.5 2.75 21.5H10.25C10.913 21.5 11.5489 21.2366 12.0178 20.7678C12.4866 20.2989 12.75 19.663 12.75 19V2.75C12.75 2.08696 12.4866 1.45107 12.0178 0.982233C11.5489 0.513392 10.913 0.25 10.25 0.25ZM10.25 17.75H2.75V2.75H10.25V17.75ZM25.25 15.25H15.25V17.75H25.25V25.25H10.25V24H6.5V25.25C6.5 25.913 6.76339 26.5489 7.23223 27.0178C7.70107 27.4866 8.33696 27.75 9 27.75H25.25C25.913 27.75 26.5489 27.4866 27.0178 27.0178C27.4866 26.5489 27.75 25.913 27.75 25.25V17.75C27.75 17.087 27.4866 16.4511 27.0178 15.9822C26.5489 15.5134 25.913 15.25 25.25 15.25ZM27.75 11.5L22.75 9L25.1375 7.8625C24.4197 6.16407 23.2179 4.71442 21.682 3.69417C20.1461 2.67393 18.3439 2.12821 16.5 2.125V0.25C19.4837 0.25 22.3452 1.43526 24.455 3.54505C26.5647 5.65483 27.75 8.51631 27.75 11.5V11.5Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.MUSIC:
            {
                return <svg height="100%" width="100%" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.625 0.375V18.6042C28.625 19.9579 28.0872 21.2561 27.13 22.2134C26.1728 23.1706 24.8745 23.7083 23.5208 23.7083C22.1671 23.7083 20.8689 23.1706 19.9116 22.2134C18.9544 21.2561 18.4167 19.9579 18.4167 18.6042C18.4167 17.2505 18.9544 15.9522 19.9116 14.995C20.8689 14.0378 22.1671 13.5 23.5208 13.5C24.3083 13.5 25.0521 13.675 25.7083 13.9958V5.43542L11.125 8.54167V21.5208C11.125 22.8745 10.5872 24.1728 9.63003 25.13C8.67281 26.0872 7.37454 26.625 6.02083 26.625C4.66713 26.625 3.36886 26.0872 2.41164 25.13C1.45443 24.1728 0.916668 22.8745 0.916668 21.5208C0.916668 20.1671 1.45443 18.8689 2.41164 17.9116C3.36886 16.9544 4.66713 16.4167 6.02083 16.4167C6.80833 16.4167 7.55208 16.5917 8.20833 16.9125V4.75L28.625 0.375Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.FACE:
            {
                return <svg height="100%" width="100%" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.1667 15.5C27.1667 12.4058 25.9375 9.43835 23.7496 7.25043C21.5617 5.0625 18.5942 3.83334 15.5 3.83334C12.4058 3.83334 9.43835 5.0625 7.25042 7.25043C5.0625 9.43835 3.83333 12.4058 3.83333 15.5C3.83333 18.5942 5.0625 21.5617 7.25042 23.7496C9.43835 25.9375 12.4058 27.1667 15.5 27.1667C18.5942 27.1667 21.5617 25.9375 23.7496 23.7496C25.9375 21.5617 27.1667 18.5942 27.1667 15.5ZM30.0833 15.5C30.0833 19.3677 28.5469 23.0771 25.812 25.812C23.0771 28.5469 19.3677 30.0833 15.5 30.0833C13.5849 30.0833 11.6885 29.7061 9.9192 28.9733C8.14987 28.2404 6.54222 27.1662 5.18803 25.812C2.45312 23.0771 0.916668 19.3677 0.916668 15.5C0.916668 11.6323 2.45312 7.92294 5.18803 5.18803C7.92293 2.45313 11.6323 0.916672 15.5 0.916672C17.4151 0.916672 19.3115 1.29388 21.0808 2.02676C22.8501 2.75964 24.4578 3.83384 25.812 5.18803C27.1662 6.54222 28.2404 8.14987 28.9732 9.91921C29.7061 11.6885 30.0833 13.5849 30.0833 15.5ZM12.5833 11.8542C12.5833 13.0208 11.5625 14.0417 10.3958 14.0417C9.22917 14.0417 8.20834 13.0208 8.20834 11.8542C8.20834 10.6875 9.22917 9.66667 10.3958 9.66667C11.5625 9.66667 12.5833 10.6875 12.5833 11.8542ZM22.7917 11.8542C22.7917 13.0208 21.7708 14.0417 20.6042 14.0417C19.4375 14.0417 18.4167 13.0208 18.4167 11.8542C18.4167 10.6875 19.4375 9.66667 20.6042 9.66667C21.7708 9.66667 22.7917 10.6875 22.7917 11.8542ZM15.5 23.1271C12.9479 23.1271 10.7021 22.0625 9.38959 20.4875L11.4604 18.4167C12.1167 19.4667 13.6771 20.2104 15.5 20.2104C17.3229 20.2104 18.8833 19.4667 19.5396 18.4167L21.6104 20.4875C20.2979 22.0625 18.0521 23.1271 15.5 23.1271Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.STEPS:
            {
                return <svg height="100%" width="100%" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.875 0.291664V6.125H12.0417V11.9583H6.20833V17.7917H0.375V22.1667H10.5833V16.3333H16.4167V10.5H22.25V4.66666H28.0833V0.291664H17.875Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.FEET:
            {
                return <svg height="100%" width="100%" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6625 15.0917C11.3479 16.8854 11.275 18.7521 9.21874 19.4958C4.98957 21.0562 4.04166 16.9583 3.98332 16.7542L10.6625 15.0917ZM3.32707 13.9104L9.62707 12.35C9.34999 10.8187 9.77291 9.2875 9.77291 7.47916C9.77291 5.02916 7.83332 0.231248 4.74166 1.00416C1.21249 1.87916 0.702074 5.80208 0.833324 7.69791C1.00832 9.59375 3.22499 13.6479 3.32707 13.9104ZM21.0312 26.9479C20.9875 27.1667 20.025 31.25 15.7958 29.7042C13.7542 28.9458 13.6667 27.0792 14.3521 25.2854L21.0312 26.9479ZM24.1667 17.9062C24.3125 16.0104 23.8167 12.0729 20.2729 11.1979C17.1958 10.3958 15.2562 15.2229 15.2562 17.6875C15.2562 19.4812 15.6646 21.0125 15.4167 22.5437L21.6875 24.1042C21.8042 23.8417 24.0062 19.7875 24.1667 17.9062Z" fill={this.state.color}/>
                </svg>
            }
            case ICON_TYPE.FOLDER:
            {
                return <svg height="100%" width="100%" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.1667 21.25H3.83333V6.66666H27.1667V21.25ZM27.1667 3.74999H15.5L12.5833 0.833328H3.83333C2.21458 0.833328 0.916668 2.13124 0.916668 3.74999V21.25C0.916668 22.0235 1.22396 22.7654 1.77094 23.3124C2.31792 23.8594 3.05979 24.1667 3.83333 24.1667H27.1667C27.9402 24.1667 28.6821 23.8594 29.2291 23.3124C29.776 22.7654 30.0833 22.0235 30.0833 21.25V6.66666C30.0833 5.89311 29.776 5.15125 29.2291 4.60427C28.6821 4.05729 27.9402 3.74999 27.1667 3.74999Z" fill={this.state.color}/>
                </svg>
            }
        }
    }

    render () {
        return <div className="cardicon-container" style={typeof this.state.callback != 'undefined' ? {"cursor": "pointer"} : {}} onClick={() => this.handleOnClick()}>{this.getIcon()}</div>
    }
}

export {ICON_TYPE, CardIcon}