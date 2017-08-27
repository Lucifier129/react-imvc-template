import React from "react";
import { Input } from 'react-imvc/component'
import Layout from "../../component/Layout";

export default function View({ state }) {
    return (
        <Layout>
            Title: <Input name="html.title" />
        </Layout>
    )
}