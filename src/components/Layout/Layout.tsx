import React, {FC} from 'react';
import s from './Layout.module.css'
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link';
import SearchUser from "../SearchUser/SearchUser";

const Layout: FC = ({children}) => {
    return (
        <>
            <Head>
                <title>GitHub info</title>
            </Head>
            <header className={s.header}>
                <div className={s.logo}>
                    <Link href='/'>
                        <a>
                            <Image src='/github-logo.svg' width={40} height={40}/>
                        </a>
                    </Link>
                </div>
                <SearchUser />
            </header>
            <main className={s.main}>{children}</main>
            <footer className={s.footer}>
                Ilya Orsich &copy; | 2021
            </footer>
        </>
    )
};

export default Layout;