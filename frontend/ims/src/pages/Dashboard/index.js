import { Layout } from 'antd'
import HeaderComp from '../../shared/header';
import FooterComp from '../../shared/footer';
import ContentComp from '../../shared/content';
import SiderComp from '../../shared/left panel';

const Dashboard = () => {
  return(
    <Layout>
      <HeaderComp/>
      <ContentComp/>
      <Layout>
        <SiderComp/>
      </Layout>
      <FooterComp/>
    </Layout>
  )
};

export default Dashboard;
