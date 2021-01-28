import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actJiraHOCModalHideModal } from '../../redux/actions/normalActions/JiraHOCModalActions';

export default function JiraHOCModal(props) {

    const dispatch = useDispatch();

    const handleClose = () => dispatch(actJiraHOCModalHideModal());

    const { isModalVisible, innerComponentModal } = useSelector(state => state.JiraHOCModalReducer);

    return (
        <Modal onOk={handleClose} onCancel={handleClose} title={null} maskClosable={true} visible={isModalVisible} footer={null} width="80%">
            {innerComponentModal}
        </Modal>
    )
}