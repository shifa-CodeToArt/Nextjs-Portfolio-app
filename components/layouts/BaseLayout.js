import Header from "@/components/shared/Header";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
import {useRouter} from "next/router";

const BaseLayout = (props) => {
  const router = useRouter();
  const {
    className,
    user,
    navClass = "with-bg",
    loading,
    children,
    canonicalPath,
    title = "Portfolio App - ShifaShaikh",
    metaDescription = "My name is ShaifaShaikh and I am an experienced software engineer and freelance developer. Throughout my career, I have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience.",
  } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
   
        <meta name="title" key="title" content={title} />
        <meta property="og:title" key="og:title" />
        <meta property="og:locale" key="og:locale" content="en_EU" />
        <meta property="og:url" key="og:url" content={`${process.env.BASE_URL}${router.asPath}`} />
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:description" key="og:type" content={metaDescription} />
        <meta property="og:image" key="og:image" content={`${process.env.BASE_URL}/images/section-1.png`} />
        <link
        rel="canonical"
        href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`} />
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className="layout-container">
        <Header className={navClass} user={user} loading={loading} />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
        <ToastContainer />
      </div>
    </>
  );
};

export default BaseLayout;
