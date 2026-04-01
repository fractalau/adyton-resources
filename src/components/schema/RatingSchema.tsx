import { Helmet } from "react-helmet-async";

interface RatingSchemaProps {
  entityName: string;
  entityType: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

const RatingSchema = ({
  entityName,
  entityType,
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
}: RatingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": entityType,
    name: entityName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default RatingSchema;
