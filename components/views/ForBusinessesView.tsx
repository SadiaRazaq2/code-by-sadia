import { BusinessAdvantage } from "@/components/business/BusinessAdvantage";
import { BusinessAudience } from "@/components/business/BusinessAudience";
import { BusinessCapabilities } from "@/components/business/BusinessCapabilities";
import { BusinessClose } from "@/components/business/BusinessClose";
import { BusinessFaq } from "@/components/business/BusinessFaq";
import { BusinessHero } from "@/components/business/BusinessHero";
import { BusinessProblems } from "@/components/business/BusinessProblems";
import { BusinessProcess } from "@/components/business/BusinessProcess";
import { BusinessUseCases } from "@/components/business/BusinessUseCases";
import { BusinessWork } from "@/components/business/BusinessWork";
import { Ticker } from "@/components/sections/Ticker";

export function ForBusinessesView() {
  return (
    <>
      <BusinessHero />
      <Ticker decorative />
      <BusinessProblems />
      <BusinessCapabilities />
      <BusinessProcess />
      <BusinessAdvantage />
      <BusinessWork />
      <BusinessUseCases />
      <BusinessAudience />
      <BusinessFaq />
      <BusinessClose />
    </>
  );
}
