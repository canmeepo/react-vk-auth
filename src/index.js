import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VkAuth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            isProcessing: false,
        }
    }

    componentDidMount() {
        document.getElementById('vk-sdk') ? this.sdkLoaded(): null;
        this.asyncInit();
        this.loadSdkAsync();
    }

    asyncInit() {
        const { apiId } = this.props;
        window.vkAsyncInit = () => {
        window.VK.init({ apiId });
        this.setState({ isLoaded: true });
        };
    }

    sdkLoaded() {
        this.setState({ isLoaded: true });
    }

    loadSdkAsync() {
        const el = document.createElement('script');
        el.type = 'text/javascript';
        el.src = 'https://vk.com/js/api/openapi.js?';
        el.async = true;
        el.id = 'vk-sdk';
        document.getElementsByTagName('head')[0].appendChild(el);
    }

    checkLoginState = (response) => {
        this.setState({ isProcessing: false });

        this.props.callback ? this.props.callback(response) : null;
    };

    handleClick = () => {
        if (!this.state.isLoaded || this.state.isProcessing || this.props.disabled) {
        return;
        }
        this.setState({ isProcessing: true });
        window.VK.Auth.login(this.checkLoginState);
    };

    render() {
        const { disabled, callback, apiId, containerStyle, ...buttonProps } = this.props;
        return (
        <span style={containerStyle}>
            <button
            {...buttonProps}
            onClick={this.handleClick}
            >
            </button >
        </span>
        );
    }
}

VkAuth.propTypes = {
  disabled: PropTypes.bool,
  callback: PropTypes.func.isRequired,
  apiId: PropTypes.string.isRequired,
  containerStyle: PropTypes.object
};

export default VkAuth;
