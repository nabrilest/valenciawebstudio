import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  featured = false,
  buttonText = "Quiero este plan",
  buttonLink = "/contacto",
}: PricingCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
        featured
          ? "border-secondary shadow-lg ring-2 ring-secondary/20"
          : "border-border hover:border-secondary/30"
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Más popular
        </div>
      )}
      <CardHeader className="text-center pb-4">
        <CardTitle className="font-display text-xl md:text-2xl text-foreground">
          {title}
        </CardTitle>
        <div className="mt-3">
          <span className="font-display text-4xl font-bold text-foreground">
            {price}
          </span>
          <span className="font-body text-muted-foreground ml-1">€</span>
        </div>
        <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
          {description}
        </p>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <ul className="space-y-3 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span className="font-body text-sm text-muted-foreground">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button
          asChild
          className={`w-full mt-6 font-body font-semibold ${
            featured
              ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
