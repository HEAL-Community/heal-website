export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Healthcare Education and Awareness Lab",
    alternateName: "HEAL",
    url: "https://healcommunity.net",
    description:
      "Healthcare Education and Awareness Lab (HEAL) transforms credible healthcare knowledge into accessible communication through education, journalism, documentation, digital health, and innovation.",
    slogan: "Building Healthier Communities Through Communication",
    foundingDate: "2025",
    sameAs: [
      "https://www.linkedin.com/company/heal-community/",
      "https://x.com/healcommunity25",
      "https://www.instagram.com/_healcommunity_/",
      "https://www.threads.com/@_healcommunity_",
      "https://youtube.com/@healcommunity25",
      "https://open.substack.com/pub/healcommunity25",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
