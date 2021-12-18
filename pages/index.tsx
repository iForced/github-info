import type { NextPage } from 'next'
import Layout from "../src/components/Layout/Layout";
import User from "../src/components/User/User";

const Home: NextPage = () => {
  return (
    <div>
        <Layout>
            <User />
        </Layout>
    </div>
  )
}

export default Home
