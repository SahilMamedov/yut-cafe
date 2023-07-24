import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./loading.module.css";
import { BounceLoader, PacmanLoader } from "react-spinners";

const Loading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStartLoading = () => {
      setLoading(true);
    };
    const handleCompleteLoading = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleCompleteLoading);
    router.events.on("routeChangeError", handleCompleteLoading);
    return () => {
      router.events.off("routeChangeStart", handleStartLoading);
      router.events.off("routeChangeComplete", handleCompleteLoading);
      router.events.off("routeChangeError", handleCompleteLoading);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className={styles.wrapper}>
          <PacmanLoader color="#54a5f7" />
          {/* <div className={styles.spinner} /> */}
          {/* <div className={styles.loadingBox}>
            <PacmanLoader color="#ffffff" />
          </div> */}
        </div>
      )}
    </>
  );
};
export default Loading;
