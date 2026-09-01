export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://healcommunity.net/#organization",
    name: "HEAL Community",
    legalName: "Healthcare Education & Awareness Lab",
    url: "https://healcommunity.net",
    logo: "https://healcommunity.net/heal-community-logo.png",
    description:
      "Healthcare Education & Awareness Lab advancing health education, health journalism, healthcare documentation, digital health, and community engagement.",
    sameAs: [
      "https://www.linkedin.com/company/heal-community/",
      "https://x.com/_healcommunity_",
      "https://www.instagram.com/_healcommunity_/",
      "https://www.threads.com/@_healcommunity_",
      "https://healcommunity25.substack.com/",
      "https://youtube.com/@healcommunity25",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization),
      }}
    />
  );
}
