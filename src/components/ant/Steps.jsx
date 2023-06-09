import React, { useEffect } from 'react';
// import { CaretRightOutlined } from '@ant-design/icons';
// import { Collapse } from 'antd';
import PersonalDetailsForm from '../profile_creation/PersonalDetailsForm';
import FamilyDetailsForm from '../profile_creation/FamilyDetailsForm';
import ContactDetaillsForm from '../profile_creation/ContactDetaillsForm';
import OtherDetailsForm from '../profile_creation/OtherDetailsForm';
import PhotoDetailsFrom from '../profile_creation/PhotoDetailsFrom';
import '../../style/app.scss'

// const { Panel } = Collapse;

// const App = () => {

//   return(
//     <Collapse
//       bordered={false}
//       defaultActiveKey={['1']}
//       expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} style={{"color":"#DF3768"}} />}
//       className="site-collapse-custom-collapse"
//       style={{margin:"1rem",padding:"0.5rem",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
//     >
//       <Panel header="PERSONAL DETAILS" key="1" className="site-collapse-custom-panel"  style={{"color":"#DF3768"}}>
//         <PersonalDetailsForm  />
//       </Panel>
//       <Panel header="FAMILY INFORMATION" key="2" className="site-collapse-custom-panel">
//         <FamilyDetailsForm />
//       </Panel>
//       <Panel header="CONTACT INFORMATION" key="3" className="site-collapse-custom-panel">
//         <ContactDetaillsForm />
//       </Panel>
//       <Panel header="OTHER INFORMATION" key="4" className="site-collapse-custom-panel">
//         <OtherDetailsForm />
//       </Panel>
//       <Panel header="PHOTOS" key="5" className="site-collapse-custom-panel"  >
//         <PhotoDetailsFrom />
//       </Panel>
//     </Collapse>
//   );
// }
// export default App;



import { Button, Form, message, Steps, theme} from 'antd';
import { useState } from 'react';
// const steps = [
//   {
//     title: 'PERSONAL INFORMATION',
//     content: (<PersonalDetailsForm personalOnFinish={onFinishPersonalDeatail} />),
//   },
//   {
//     title: 'FAMILY INFORMATION',
//     content: (<FamilyDetailsForm/>),
//   },
//   {
//     title: 'CONTACT INFORMATION',
//     content: (<ContactDetaillsForm/>),
//   },
//   {
//     title: 'OTHER INFORMATION',
//     content: (<OtherDetailsForm/>),
//   },
//   {
//     title: 'Photo',
//     content: (<PhotoDetailsFrom/>),
//   },
// ];



const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const [personal,setPersonal] = useState(null)
  const onFinishPersonalDeatail = (values)=>{
    setPersonal(values)
    setCurrent(current + 1);
  }

  const previousBtnHandle = ()=>{
    setCurrent(current - 1)
  }

  const steps = [
    {
      title: 'PERSONAL INFORMATION',
      content: (<PersonalDetailsForm personalOnFinish={onFinishPersonalDeatail}  />),
    },
    {
      title: 'FAMILY INFORMATION',
      content: (<FamilyDetailsForm familyOnFinish={onFinishPersonalDeatail} previousBtnHandle={previousBtnHandle}/>),
    },
    {
      title: 'CONTACT INFORMATION',
      content: (<ContactDetaillsForm contactOnFinish={onFinishPersonalDeatail} previousBtnHandle={previousBtnHandle}/>),
    },
    {
      title: 'OTHER INFORMATION',
      content: (<OtherDetailsForm otherOnFinish={onFinishPersonalDeatail} previousBtnHandle={previousBtnHandle}/>),
    },
    {
      title: 'Photo',
      content: (<PhotoDetailsFrom previousBtnHandle={previousBtnHandle}/>),
    },
  ];
  

  // step onClick - 
  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
    
  };

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding:10,
    margin:'2rem auto',
    width:'80%'
  };

  const nextButtonStyle = {
    backgroundColor:"#DF3768",
  }
  
  useEffect(()=>{
    alert(`Create profile with actual/correct information. Half correct/Full incorrect and suspicious information profile will be deleted by admin.
    पूरी/सही जानकारी के साथ प्रोफाइल बनाएं। आधी सही/पूरी गलत और मशकूक  जानकारी वाले प्रोफ़ाइल डिलीट कर दी जाएगी।`)
  },[])

  return (
    <>
      {/* <Alert  
      message="Create profile with actual/correct information. Half correct/Full incorrect and suspicious information profile will be deleted by admin.
      पूरी/सही जानकारी के साथ प्रोफाइल बनाएं। आधी सही/पूरी गलत और मशकूक  जानकारी वाले प्रोफ़ाइल डिलीट कर दी जाएगी।" 
      type="info" 
      showIcon 
      closable
      style={{margin:'1rem'}}
      /> */}

      <Steps  current={current} onChange={onChange} items={items} style={{padding:'20px 10px'}} progressDot  />
      <div style={contentStyle}>{steps[current].content}</div>
   
      <div
        style={{
          marginTop: 24,
          paddingLeft:15,
          paddingBottom:10,
          textAlign:'center'
        }}
      >
        {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} style={nextButtonStyle} className='nextHoverBtn' >
            Next
          </Button>
        )} */}
        {/* {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
            className='previousHoverBtn'
          >
            Previous
          </Button>
        )} */}
      </div>
    </>
  );
};
export default App;