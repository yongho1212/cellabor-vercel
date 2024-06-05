import React, { useState } from 'react';
import styled from 'styled-components';

type TabProps = {
    tabs: Array<any>;
};
const TabView = ({ tabs }: TabProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div>
            <TabBar>
                {tabs.map(tab => (
                    <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
            </TabBar>
            {tabs.map(tab => (
                activeTab === tab.id && <div key={tab.id}>{tab.content}</div>
            ))}
        </div>
    );
};

export default TabView;

const TabBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: #e8e8e8;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;
