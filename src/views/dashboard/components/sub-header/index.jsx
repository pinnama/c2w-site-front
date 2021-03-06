import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { primaryColor } from "../../../../commons/colors";

const StyledHeader = styled.h2`
    color: ${primaryColor};
    font-weight: bold;
    margin: 24px;
`;

export default class SubHeader extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired
    };

    render() {
        return <StyledHeader>{this.props.label.toUpperCase()}</StyledHeader>;
    }
}
