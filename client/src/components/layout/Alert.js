import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Alert as AlertToast } from 'antd';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <AlertToast message={alert.msg} type={alert.type} showIcon />
    )
  );
};

export default Alert;
