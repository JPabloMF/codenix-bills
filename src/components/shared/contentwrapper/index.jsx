import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

/* Components */
import PageNotFound from '../../pagenotfound';
import Home from '../../dashboard/home';
import Bills from '../../dashboard/bills';
import DocumentBills from '../../dashboard/documentbills';
import Goals from '../../dashboard/goals';
import Pendings from '../../dashboard/pendings';
import Stats from '../../dashboard/stats';

const Wrapper = styled.div`
    margin-left: 250px;
`;

const ContentWrapper = props => (
    <Wrapper>
        <Switch>
            <Route exact path="/Dashboard" component={Home} />
            <Route path="/Dashboard/Bills" component={Bills} />
            <Route path="/Dashboard/DocumentBills" component={DocumentBills} />
            <Route path="/Dashboard/Goals" component={Goals} />
            <Route path="/Dashboard/Pendings" component={Pendings} />
            <Route path="/Dashboard/Stats" component={Stats} />
            <Route component={PageNotFound} />
        </Switch>
    </Wrapper>
)

export default ContentWrapper