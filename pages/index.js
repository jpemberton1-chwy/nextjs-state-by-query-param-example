import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home({ defaultShowModal = false }) {
  const router = useRouter();

  const [showModal, setShowModal] = useState(defaultShowModal);

  useEffect(() => {
    if (router.query.showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [router.query]);

  return (
    <div>
      <Link shallow href={{pathname: "/", query: { showModal: true }}}>{'Show Modal'}</Link>
      {showModal && (
        <Link shallow href={{pathname: "/", query: {}}}>{'Close Modal'}</Link>
      )}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;

  const props = {
    showModal: !!query.showModal,
  };

  return { props };
}
