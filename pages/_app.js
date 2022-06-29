import React from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import withData from "../lib/apollo";
import AppContext from "../context/AppContext";
import Cookies from "js-cookie";

// 全てのコンポーネントの幹になる
class MyApp extends App {
  state = {
    user: null,
    cart: { items: [], total: 0 },
  };

  setUser = (user) => {
    this.setState({ user });
  };

  // 既にユーザーのクッキー情報が残っているかを確認する
  componentDidMount() {
    const token = Cookies.get("token"); // tokenの中にjwtが入っている

    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        if (!res.ok) {
          Cookies.remove("token");
          this.setState({ user: null });
          return null;
        }
        const user = await res.json();
        this.setUser(user); // ログイン
      });
    }
  }

  // カートへ商品の追加
  addItem = (item) => {
    let { items } = this.state.cart;
    const newItem = items.find((i) => i.id === item.id);
    if (!newItem) {
      item.quantity = 1;
      // cartに追加
      this.setState(
        {
          cart: {
            items: [...items, item],
            total: this.state.cart.total + item.price,
          },
        },
        () => Cookies.set("cart", this.state.cart.items)
      );
    }
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider
        value={{ user: this.state.user, setUser: this.setUser }}
      >
        <>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            />
          </Head>

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </AppContext.Provider>
    );
  }
}

export default withData(MyApp);
