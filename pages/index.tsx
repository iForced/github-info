import type {NextPage} from 'next'
import Layout from "../src/components/Layout/Layout";
import UserInfo from "../src/components/UserInfo/UserInfo";

const Home: NextPage = () => {

    return (
        <div>
            <Layout>
                <UserInfo />
            </Layout>
        </div>
    )
}

export default Home
