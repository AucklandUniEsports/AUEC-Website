"use client";
import { useState } from "react";
import { Content } from "./_components/content/Content";
import { Entry } from "./_components/entry/Entry";

export default function Merch() {
    const [showContent, setShowContent] = useState(false);

    return (
        <>
            {showContent ? (
                <Content />
            ) : (
                <Entry onEnter={() => setShowContent(true)} />
            )}
        </>
    );
}
