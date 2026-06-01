import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeniIsland from "./pages/FeniIsland";
import FergussonIsland from "./pages/FergussonIsland";
import ProjectsOverview from "./pages/ProjectsOverview";
import Investors from "./pages/Investors";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhyPNG from "./pages/WhyPNG";
import PressRelease from "./pages/PressRelease";
import PressReleaseIndex from "./pages/PressReleaseIndex";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import ComingSoon from "./pages/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";
import DualTrackGrowthStrategy from "./announcements/dual-track-growth-strategy";
import WapoluMineralResourcesEstimate from "./announcements/wapolu-updated-mineral-resources-estimate";
import FeniGlobalOreDiscovery from "./announcements/feni-global-ore-discovery";
import WapoluLoiGoldConcentrate from "./announcements/wapolu-loi-gold-concentrate";
import DrErinJohnsFeni from "./announcements/dr-erin-johns-feni";
import Adyton2025Momentum from "./announcements/adyton-2025-momentum";
import WapoluLandOwnershipBaseline from "./announcements/wapolu-land-ownership-baseline";
import FeniFDD005SignificantScale from "./announcements/feni-fdd005-significant-scale";
import FeniFDD004FinalAssays from "./announcements/feni-fdd004-final-assays";
import FeniDrillholes13CopperZones from "./announcements/feni-drillholes-1-3-copper-zones";
import C20mFinancingClosing from "./announcements/c20m-financing-closing";
import BoardStrengthensStockOptionsRsus from "./announcements/board-strengthens-stock-options-rsus";
import UpsizedC20mFinancing from "./announcements/upsized-c20m-financing";
import FeniMultipleGoldIntersections from "./announcements/feni-multiple-gold-intersections";
import FeniDrillingUpdateJune2025 from "./announcements/feni-drilling-update-june-2025";
import Q12025FinancialsFiling from "./announcements/q1-2025-financials-filing";
import ClarusSecuritiesMiningWatchList from "./announcements/clarus-securities-mining-watch-list";
import WapoluFirstDrillIntercepts36gt from "./announcements/wapolu-first-drill-intercepts-36gt";
import FeniFirstDrillSamplesDispatched from "./announcements/feni-first-drill-samples-dispatched";
import FY2024FinancialsAndCorporateUpdate from "./announcements/fy2024-financials-and-corporate-update";
import WapoluDrilling4000mGameta from "./announcements/wapolu-4000m-drilling-gameta-landowner-support";
import FeniDrillingAdvances100Owned from "./announcements/feni-drilling-advances-100-owned";
import PngStateTeamWapoluVisit from "./announcements/png-state-team-wapolu-visit";
import FeniSignificantCopperMineralization from "./announcements/feni-significant-copper-mineralization";
import WapoluDrillingProgressingToPlan from "./announcements/wapolu-drilling-progressing-to-plan";
import FeniMultipleRigMobilization from "./announcements/feni-multiple-rig-mobilization";
import FeniDroneSurveyCompleted from "./announcements/feni-drone-survey-completed";
import WapoluDrillingCommencesFeasibility from "./announcements/wapolu-drilling-commences-feasibility";
import FeniMobilizesDroneSurveyTeam from "./announcements/feni-mobilizes-drone-survey-team";
import GametaFeniWardensHearings from "./announcements/gameta-feni-wardens-hearings";
import ChrisBowdenCOO from "./announcements/chris-bowden-coo";
import USD5MStrategicPrivatePlacementClosing from "./announcements/usd5m-strategic-private-placement-closing";
import NonBrokeredPrivatePlacementAnnouncement from "./announcements/non-brokered-private-placement-announcement";
import FeniFieldWorkFriedland from "./announcements/feni-field-work-friedland-geologist";
import FeniHistoricalDataCuAu from "./announcements/feni-historical-data-cu-au-discovery-potential";
import FeniResourceGrowthUntestedTargets from "./announcements/feni-resource-growth-untested-drill-targets";
import IvanhoeMongoliaBoard from "./announcements/ivanhoe-mongolia-exploration-manager-board";
import EvihFergussonFeasibilityBulkSample from "./announcements/evih-team-fergusson-feasibility-bulk-sample";
import EvihUS95MInvestmentAgreement from "./announcements/evih-us95m-investment-development-agreement-fergusson";
import FY2023FinancialsFiling from "./announcements/fy2023-financials-filing";
import FeniRecommenceWorkActivities from "./announcements/feni-recommence-work-activities";
import NonBrokeredPrivatePlacementClosing from "./announcements/non-brokered-private-placement-closing";
import NonBrokeredPrivatePlacementMarch2024 from "./announcements/non-brokered-private-placement-march-2024";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects-overview" element={<ProjectsOverview />} />
          <Route path="/projects-overview/" element={<ProjectsOverview />} />
          <Route path="/projects/feni" element={<FeniIsland />} />
          <Route path="/projects/fergusson" element={<FergussonIsland />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/adyton-resources-outlines-dual-track-growth-strategy-in-crux-investor-interview" element={<DualTrackGrowthStrategy />} />
          <Route path="/news/adyton-reports-200-increase-to-wapolu-updated-inferred-mineral-resources-estimate" element={<WapoluMineralResourcesEstimate />} />
          <Route path="/news/adyton-expands-discovery-capability-at-feni-gold-copper-project-with-global-ore-discovery-consultants" element={<FeniGlobalOreDiscovery />} />
          <Route path="/news/adyton-resources-receives-non-binding-letter-of-intent-loi-for-the-purchase-of-gold-concentrate-from-its-wapolu-project" element={<WapoluLoiGoldConcentrate />} />
          <Route path="/news/adyton-resources-welcomes-lihir-deposit-expert-dr-erin-johns-to-the-team-to-drive-feni-gold-copper-project-development" element={<DrErinJohnsFeni />} />
          <Route path="/news/adyton-2025-momentum-execution-and-a-clear-path-forward" element={<Adyton2025Momentum />} />
          <Route path="/news/adyton-reports-completion-of-land-ownership-and-baseline-field-work-at-wapolu-joint-venture" element={<WapoluLandOwnershipBaseline />} />
          <Route path="/news/adyton-confirms-significant-scale-at-feni-gold-copper-project-fdd005-returns-158m-0-72g-t-au-eq-0-54g-t-au-0-14-cu-and-identifies-new-high-priority-drill-targets" element={<FeniFDD005SignificantScale />} />
          <Route path="/news/adyton-reports-final-assays-from-fdd004-confirming-strong-mineralized-intercepts-of-115m-at-1-00g-t-gold-equivalent-0-92g-t-au-0-07-cu-within-a-broader-mineralized-zone-of-229m-at-0-79g-t-gold-equ" element={<FeniFDD004FinalAssays />} />
          <Route path="/news/adyton-reports-final-assays-from-feni-drillholes-1-3-confirming-multiple-copper-mineralised-zones-complementing-previously-reported-gold-fdd003-upgraded-by-40-for-combined-125-9-gxm-au-eq" element={<FeniDrillholes13CopperZones />} />
          <Route path="/news/adyton-resources-closes-oversubscribed-c20-million-financing-comprised-of-14-million-brokered-private-placement-of-units-and-concurrent-6-million-nonbrokered-private-placements" element={<C20mFinancingClosing />} />
          <Route path="/news/adyton-resources-strengthens-board-and-grants-stock-options-and-rsus" element={<BoardStrengthensStockOptionsRsus />} />
          <Route path="/news/adyton-resources-announces-upsized-c20-million-financing-comprised-of-14-million-private-placement-of-units-and-concurrent-6-million-non-brokered-private-placement-of-units" element={<UpsizedC20mFinancing />} />
          <Route path="/news/adyton-reports-multiple-significant-gold-intersections-from-its-feni-island-gold-copper-project-drilling" element={<FeniMultipleGoldIntersections />} />
          <Route path="/news/adyton-reports-update-on-feni-island-gold-copper-project-drilling" element={<FeniDrillingUpdateJune2025 />} />
          <Route path="/news/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-three-months-ended-march-31-2025" element={<Q12025FinancialsFiling />} />
          <Route path="/news/adyton-resources-featured-on-clarus-securities-mining-watch-list" element={<ClarusSecuritiesMiningWatchList />} />
          <Route path="/news/adyton-reports-first-drill-intercepts-of-up-to-36-grams-per-tonne-gold-from-its-wapolu-drill-campaign" element={<WapoluFirstDrillIntercepts36gt />} />
          <Route path="/news/adyton-announces-first-drill-samples-from-latest-campaign-at-its-feni-island-gold-project-with-high-copper-prospectivity-have-been-dispatched-for-analysis" element={<FeniFirstDrillSamplesDispatched />} />
          <Route path="/news/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-period-ending-december-31-2024-and-provides-corporate-update" element={<FY2024FinancialsAndCorporateUpdate />} />
          <Route path="/news/adyton-resources-completes-over-4000m-drilling-at-wapolu-and-prepares-for-gameta-drilling-with-unanimous-landowner-support" element={<WapoluDrilling4000mGameta />} />
          <Route path="/news/adyton-resources-announces-drilling-advances-at-100-owned-feni-island-gold-copper-project" element={<FeniDrillingAdvances100Owned />} />
          <Route path="/news/png-government-state-team-visits-fergusson-island-wapolu-project-to-commence-operations-restart-permitting" element={<PngStateTeamWapoluVisit />} />
          <Route path="/news/significant-copper-mineralization-in-addition-to-gold-on-feni-island" element={<FeniSignificantCopperMineralization />} />
          <Route path="/news/drilling-progressing-to-plan-at-fergusson-wapolu-project" element={<WapoluDrillingProgressingToPlan />} />
          <Route path="/news/multiple-rig-mobilization-underway-and-new-camp-completion" element={<FeniMultipleRigMobilization />} />
          <Route path="/news/drone-survey-completed-at-feni-island-gold-copper-project" element={<FeniDroneSurveyCompleted />} />
          <Route path="/news/drilling-commences-at-fergusson-island-wapolu-gold-project-for-feasibility-and-production-planning" element={<WapoluDrillingCommencesFeasibility />} />
          <Route path="/news/adyton-mobilizes-drone-survey-team-to-feni-island" element={<FeniMobilizesDroneSurveyTeam />} />
          <Route path="/news/adyton-successfully-completes-gameta-and-feni-wardens-hearings" element={<GametaFeniWardensHearings />} />
          <Route path="/news/adyton-resources-welcomes-dr-chris-bowden-as-chief-operating-officer" element={<ChrisBowdenCOO />} />
          <Route path="/news/adyton-resources-corporation-closes-premium-to-market-usd5-million-strategic-private-placement" element={<USD5MStrategicPrivatePlacementClosing />} />
          <Route path="/news/adyton-resources-corporation-announces-non-brokered-private-placement" element={<NonBrokeredPrivatePlacementAnnouncement />} />
          <Route path="/news/adyton-commences-field-work-on-feni-island-led-by-former-friedland-senior-geologist" element={<FeniFieldWorkFriedland />} />
          <Route path="/news/review-of-existing-and-historical-data-on-feni-island-reinforces-significant-cu-au-discovery-potential" element={<FeniHistoricalDataCuAu />} />
          <Route path="/news/adyton-identifies-resource-growth-potential-with-new-untested-drill-targets-at-the-feni-island-project" element={<FeniResourceGrowthUntestedTargets />} />
          <Route path="/news/former-exploration-manager-for-ivanhoe-mines-mongolia-to-strengthen-adyton-board" element={<IvanhoeMongoliaBoard />} />
          <Route path="/news/evih-technical-and-executive-team-visit-fergusson-island-to-commence-feasibility-study-and-bulk-sample-planning" element={<EvihFergussonFeasibilityBulkSample />} />
          <Route path="/news/adyton-and-east-vision-international-holdings-execute-us9-5m-investment-and-development-agreement-for-the-fergusson-island-gold-project" element={<EvihUS95MInvestmentAgreement />} />
          <Route path="/news/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-three-and-twelve-months-ended-december-31-2023" element={<FY2023FinancialsFiling />} />
          <Route path="/news/adyton-to-recommence-work-activities-on-feni-island-gold-copper-project" element={<FeniRecommenceWorkActivities />} />
          <Route path="/news/adyton-resources-corporation-announces-closing-of-non-brokered-private-placement" element={<NonBrokeredPrivatePlacementClosing />} />
          <Route path="/news/adyton-resources-corporation-announces-non-brokered-private-placement-1" element={<NonBrokeredPrivatePlacementMarch2024 />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/pr" element={<PressReleaseIndex />} />
          <Route path="/pr/:slug" element={<PressRelease />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-png" element={<WhyPNG />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
