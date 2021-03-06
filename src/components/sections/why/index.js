import {Row, Col} from "antd";
import React, {Component} from "react";

import Workers from "../../../assets/images/icons/icon_workers.svg";
import Community from "../../../assets/images/icons/icon_community.svg";
import Leaf from "../../../assets/images/icons/icon_leaf.svg";

import Card from "./card";
import {style} from "./style";
import "./style.css";

export default class Why extends Component {

    render () {
        return (
            <div id="why" style={style.container}>
                <div style={style.titleWrp}>
                    <h2 style={style.sectionTitle}>{"Why"}</h2>
                    <p style={style.paragraph}>
                        {"Cycle2Work was created by the mondora team as a way of rewarding workers who choose to commute by bicycle. We are creating positive impact for:"}
                    </p>
                </div>
                <Row style={style.customRow}>
                    <Col xs={24} md={8}>
                        <div className="whyWrp"> 
                            <Card
                                icon={Workers}
                                text={
                                    `various studies claim cycling reduces stress levels
                                    and the risk of certain diseases, thus improving overall
                                    health and wellbeing for employees`
                                }
                                title={"Workers"}
                            />
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="whyWrp">     
                            <Card
                                icon={Leaf}
                                text={
                                    `cycling is an eco-friendly means of travel and reduces
                                    the carbon footprint of commuting to work, as well as
                                    reducing traffic congestion`
                                }
                                title={"Environment"}
                            />
                        </div>
                    </Col>
                    <Col xs={24} md={8}>
                        <div className="whyWrp">         
                            <Card
                                icon={Community}
                                text={
                                    `local bycicle shops see a rise in sales as more colleagues
                                    joins the programme. Earned travel reimbursements are
                                        paid out as gift cards for use in bycicle shops`
                                }
                                title={"Local community"}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

}
