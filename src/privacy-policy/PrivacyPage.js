import React from "react";
import PrivacyBanner from "./privacy-banner/PrivacyBanner";
import PrivacyContent from "./privacy-content/PrivacyContent";

export default function PrivacyPage() {
    return (
        <>
            <PrivacyBanner />
            <PrivacyContent />
        </>
    );
}