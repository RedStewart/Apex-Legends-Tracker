import React, { useState, useContext } from 'react';
import { Layout, Icon, Input, Form, Select, Button } from 'antd';
import ProfileContext from '../../context/profile/profileContext';

const SideBar = ({ history, form }) => {
  const profileContext = useContext(ProfileContext);

  const [formData, setFormData] = useState({
    platform: 'origin',
    gamertag: ''
  });

  const { Sider } = Layout;
  const { Option } = Select;
  const { getFieldDecorator, validateFields } = form;
  const { platform, gamertag } = formData;
  const { getProfile, fetchData, profileError } = profileContext;

  const onSubmit = async e => {
    e.preventDefault();

    validateFields(async (err, values) => {
      if (!err) {
        const resError = await getProfile(platform, gamertag, true);

        if (!resError) {
          history.push(`/profile/${platform}/${gamertag}`);
        }
      }
    });
  };

  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className='sider'
    >
      <div className='logo' />
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Item className='form-input'>
          {getFieldDecorator('gamertag', {
            rules: [{ required: true, message: 'Please input a gamertag' }]
          })(
            <label>
              Gamertag
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='Origin, PSN, Xbox'
                size='large'
                name='gamertag'
                onChange={e =>
                  setFormData({ ...formData, gamertag: e.target.value })
                }
              />
            </label>
          )}
        </Form.Item>

        <Form.Item className='form-input'>
          <label htmlFor='platform'>Platform</label>
          <Select
            className='select-search'
            name='platform'
            size='large'
            defaultValue='Origin'
            onChange={e => setFormData({ ...formData, platform: e })}
          >
            <Option value='origin'>Origin</Option>
            <Option value='psn'>Playstation</Option>
            <Option value='xbl'>Xbox</Option>
          </Select>
        </Form.Item>

        <Form.Item className='form-input'>
          {fetchData ? (
            <Button type='primary' size='large' className='btn-search' loading>
              Loading...
            </Button>
          ) : profileError ? (
            <Button type='danger' size='large' className='btn-search'>
              {profileError}
            </Button>
          ) : (
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              className='btn-search'
            >
              Search
            </Button>
          )}
        </Form.Item>
      </Form>
    </Sider>
  );
};

export default Form.create()(SideBar);
