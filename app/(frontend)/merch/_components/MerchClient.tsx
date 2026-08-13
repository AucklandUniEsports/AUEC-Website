"use client";
import { useState } from "react";
import { Content } from "./content/Content";
import { Entry } from "./entry/Entry";

export function MerchClient() {
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
