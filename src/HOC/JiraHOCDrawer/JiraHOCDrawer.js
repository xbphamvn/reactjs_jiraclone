import React from 'react';
import { Drawer, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actHideDrawerJiraHOCDrawer } from '../../redux/actions/JiraCloneActions';

export default function JiraHOCDrawer(props) {

    const { visibleDrawer, innerComponentDrawer, callBackFuncDrawer, title } = useSelector(state => state.JiraHOCDrawerReducer);

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(actHideDrawerJiraHOCDrawer());
    };

    return (
        <>
            <Drawer
                title={title}
                width={'50%'}
                onClose={onClose}
                visible={visibleDrawer}
                bodyStyle={{ paddingBottom: 50 }}
                footer={
                    <div style={{ textAlign: 'right', }}>
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={callBackFuncDrawer} type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >
                {innerComponentDrawer}
            </Drawer>
        </>
    )
}