import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsCard from "@/components/NewsCard";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const allNews = [
  // 2026
  { title: "Adyton Resources Announces Filing of NI 43-101 Technical Report on Fergusson Island Wapolu Gold Project", date: "February 25, 2026", excerpt: "Filed on SEDAR+ an independent NI 43-101 technical report on the Wapolu Gold Project, Fergusson Island, PNG.", tags: ["Fergusson", "Technical"], sourceUrl: "https://www.newsfilecorp.com/release/285234/Adyton-Resources-Announces-Filing-of-NI-43101-Technical-Report-on-Fergusson-Island-Wapolu-Gold-Project" },
  { title: "Adyton Discovers New Au-Cu Mineralized Zones and Documents Resource Continuity", date: "February 18, 2026", excerpt: "Successful results from the ongoing drill program at the 100% owned Feni Island Gold-Copper Project. 10,663m drilled to date.", tags: ["Feni", "Drilling"], sourceUrl: "https://www.newsfilecorp.com/release/284304/Adyton-Discovers-New-AuCu-Mineralized-Zones-and-Documents-Resource-Continuity" },
  { title: "Adyton Resources Outlines Dual-Track Growth Strategy in Crux Investor Interview", date: "January 13, 2026", excerpt: "Managing Director Tim Crossley outlines the Company's dual-track growth strategy in a Crux Investor interview.", tags: ["Corporate"], sourceUrl: "https://adytonresources.com/adyton-resources-outlines-dual-track-growth-strategy-in-crux-investor-interview/" },
  { title: "Adyton Reports ~200% Increase to Wapolu Updated Inferred Mineral Resource Estimate", date: "January 13, 2026", excerpt: "Updated NI 43-101 MRE for the Wapolu gold project — 1.0 million tonnes grading 1.00 g/t Au.", tags: ["Fergusson", "Resource"], sourceUrl: "https://www.newsfilecorp.com/release/280210/Adyton-Reports-200-Increase-to-Wapolu-Updated-Inferred-Mineral-Resource-Estimate" },
  // 2025
  { title: "Adyton 2025: Momentum, Execution and a Clear Path Forward", date: "December 22, 2025", excerpt: "A message from Managing Director Tim Crossley reflecting on achievements and the outlook ahead.", tags: ["Corporate"], sourceUrl: "https://www.newsfilecorp.com/release/278810/Adyton-2025-Momentum-Execution-and-a-Clear-Path-Forward" },
  { title: "Adyton Expands Discovery Capability at Feni Gold-Copper Project with Global Ore Discovery Consultants", date: "December 17, 2025", excerpt: "Engagement of world-class geological consulting group Global Ore Discovery to accelerate Feni exploration.", tags: ["Feni", "Exploration"], sourceUrl: "https://www.newsfilecorp.com/release/278318/Adyton-Expands-Discovery-Capability-at-Feni-GoldCopper-Project-with-Global-Ore-Discovery-Consultants" },
  { title: "Adyton Resources Receives Non-Binding LOI for the Purchase of Gold Concentrate from Its Wapolu Project", date: "December 10, 2025", excerpt: "Non-Binding LOI received from Korean group Hyosung TNC Corporation for purchase of gold concentrate.", tags: ["Fergusson", "Corporate"], sourceUrl: "https://www.newsfilecorp.com/release/277415/Adyton-Resources-Receives-NonBinding-Letter-of-Intent-LOI-for-the-Purchase-of-Gold-Concentrate-from-Its-Wapolu-Project" },
  { title: "Adyton Resources Welcomes Lihir Deposit Expert Dr. Erin Johns to the Team", date: "December 2, 2025", excerpt: "Dr. Erin Johns appointed to the technical team, focusing on the Feni Gold-Copper Project.", tags: ["Corporate", "Leadership"], sourceUrl: "https://www.newsfilecorp.com/release/276606/Adyton-Resources-Welcomes-Lihir-Deposit-Expert-Dr.-Erin-Johns-to-the-Team-to-Drive-Feni-GoldCopper-Project-Development" },
  { title: "Adyton Resources Announces Filing of Financial Statements and MD&A for Q3 2025", date: "November 26, 2025", excerpt: "Financial statements for the three and nine months ended September 30, 2025 filed on SEDAR+.", tags: ["Corporate", "Financials"], sourceUrl: "https://www.newsfilecorp.com/release/276132/Adyton-Resources-Announces-Filing-of-Financial-Statements-and-MDA-for-the-Three-Nine-Months-Ended-September-30-2025" },
  { title: "Adyton Reports Completion of Land Ownership and Baseline Field Work at Wapolu Joint Venture", date: "November 18, 2025", excerpt: "50/50 JV Partner EVIH completes land ownership mapping and baseline social and environmental fieldwork.", tags: ["Fergusson", "EVIH JV"], sourceUrl: "https://www.newsfilecorp.com/release/274924/Adyton-Reports-Completion-of-Land-Ownership-and-Baseline-Field-Work-at-Wapolu-Joint-Venture" },
  { title: "Adyton Confirms Significant Scale at Feni Gold-Copper Project: FDD005 Returns 158m @ 0.72 g/t Au.Eq", date: "October 14, 2025", excerpt: "Final assays from FDD005 confirm significant scale. New high-priority drill targets identified.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-confirms-significant-scale-at-feni-gold-copper-project-fdd005-returns-158m-0-72g-t-au-eq-0-54g-t-au-0-14-cu-and-identifies-new-high-priority-drill-targets/" },
  { title: "Adyton Reports Final Assays from FDD004 Confirming Strong Mineralized Intercepts of 115m at 1.00g/t Au.Eq", date: "September 8, 2025", excerpt: "FDD004 returns 229m at 0.79g/t Au.Eq with hole ending in gold-copper mineralisation.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-reports-final-assays-from-fdd004-confirming-strong-mineralized-intercepts-of-115m-at-1-00g-t-gold-equivalent-0-92g-t-au-0-07-cu-within-a-broader-mineralized-zone-of-229m-at-0-79g-t-gold-equ/" },
  { title: "Adyton Reports Final Assays From Feni Drillholes 1-3 Confirming Multiple Copper Mineralised Zones", date: "August 28, 2025", excerpt: "FDD003 upgraded by 40% for combined 125.9 GxM (Au.eq) with multiple copper mineralised zones.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-reports-final-assays-from-feni-drillholes-1-3-confirming-multiple-copper-mineralised-zones-complementing-previously-reported-gold-fdd003-upgraded-by-40-for-combined-125-9-gxm-au-eq/" },
  { title: "Adyton Resources Closes Oversubscribed C$20 Million Financing", date: "August 13, 2025", excerpt: "$14M brokered private placement of units and concurrent $6M non-brokered private placements.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/adyton-resources-closes-oversubscribed-c20-million-financing-comprised-of-14-million-brokered-private-placement-of-units-and-concurrent-6-million-nonbrokered-private-placements/" },
  { title: "Adyton Resources Strengthens Board and Grants Stock Options and RSUs", date: "July 28, 2025", excerpt: "Board strengthening with new appointments and granting of stock options and RSUs.", tags: ["Corporate", "Leadership"], sourceUrl: "https://adytonresources.com/adyton-resources-strengthens-board-and-grants-stock-options-and-rsus/" },
  { title: "Adyton Resources Announces Upsized C$20 Million Financing", date: "July 24, 2025", excerpt: "$14M private placement of units and concurrent $6M non-brokered private placement of units.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/adyton-resources-announces-upsized-c20-million-financing-comprised-of-14-million-private-placement-of-units-and-concurrent-6-million-non-brokered-private-placement-of-units/" },
  { title: "Adyton Reports Multiple Significant Gold Intersections from Feni Island Drilling, Including 144m at 1.18g/t Au", date: "July 22, 2025", excerpt: "Multiple significant gold intersections reported from the Feni Island Gold-Copper Project drilling campaign.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-reports-multiple-significant-gold-intersections-from-its-feni-island-gold-copper-project-drilling/" },
  { title: "Adyton Reports Update On Feni Island Gold-Copper Project Drilling", date: "June 13, 2025", excerpt: "Update on the ongoing drill program at the 100% owned Feni Island Gold-Copper Project.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-reports-update-on-feni-island-gold-copper-project-drilling/" },
  { title: "Adyton Resources Announces Filing of Financial Statements and MD&A for Q1 2025", date: "May 28, 2025", excerpt: "Financial statements for the three months ended March 31, 2025 filed.", tags: ["Corporate", "Financials"], sourceUrl: "https://adytonresources.com/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-three-months-ended-march-31-2025/" },
  { title: "Adyton Reports First Drill Intercepts Of Up To 36g/t Gold From Wapolu Drill Campaign", date: "May 7, 2025", excerpt: "First drill intercepts of up to 36 grams per tonne gold from the Wapolu drill campaign.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-reports-first-drill-intercepts-of-up-to-36-grams-per-tonne-gold-from-its-wapolu-drill-campaign/" },
  { title: "Adyton Announces First Drill Samples From Latest Campaign At Feni Island Have Been Dispatched For Analysis", date: "April 29, 2025", excerpt: "First drill samples from the latest campaign at the Feni Island Gold Project dispatched for analysis.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-announces-first-drill-samples-from-latest-campaign-at-its-feni-island-gold-project-with-high-copper-prospectivity-have-been-dispatched-for-analysis/" },
  { title: "Adyton Resources Completes Over 4,000m Drilling at Wapolu and Prepares for Gameta Drilling", date: "March 26, 2025", excerpt: "Over 4,000m drilling completed at Wapolu with unanimous landowner support for Gameta drilling.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-resources-completes-over-4000m-drilling-at-wapolu-and-prepares-for-gameta-drilling-with-unanimous-landowner-support/" },
  { title: "Adyton Resources Announces Drilling Advances at 100%-Owned Feni Island Gold-Copper Project", date: "March 20, 2025", excerpt: "Drilling advances at the 100%-owned Feni Island Gold-Copper Project.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/adyton-resources-announces-drilling-advances-at-100-owned-feni-island-gold-copper-project/" },
  { title: "PNG Government State Team Visits Fergusson Island Wapolu Project to Commence Operations Restart Permitting", date: "March 18, 2025", excerpt: "PNG Government state team visits Fergusson Island to commence operations restart permitting.", tags: ["Fergusson", "Corporate"], sourceUrl: "https://adytonresources.com/png-government-state-team-visits-fergusson-island-wapolu-project-to-commence-operations-restart-permitting/" },
  { title: "Significant Copper Mineralization in Addition to Gold on Feni Island", date: "February 27, 2025", excerpt: "Significant copper mineralisation confirmed in addition to gold at the Feni Island project.", tags: ["Feni", "Exploration"], sourceUrl: "https://adytonresources.com/significant-copper-mineralization-in-addition-to-gold-on-feni-island/" },
  { title: "Drilling Progressing to Plan at Fergusson Wapolu Project", date: "January 30, 2025", excerpt: "Drilling progressing to plan at the Fergusson Island Wapolu Gold Project.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/drilling-progressing-to-plan-at-fergusson-wapolu-project/" },
  { title: "Multiple Rig Mobilization Underway and New Camp Completion", date: "January 18, 2025", excerpt: "Multiple rig mobilisation underway with new camp completed.", tags: ["Feni", "Operations"], sourceUrl: "https://adytonresources.com/multiple-rig-mobilization-underway-and-new-camp-completion/" },
  { title: "Drone Survey Completed at Feni Island Gold-Copper Project", date: "January 14, 2025", excerpt: "Drone survey completed at the Feni Island Gold-Copper Project.", tags: ["Feni", "Exploration"], sourceUrl: "https://adytonresources.com/drone-survey-completed-at-feni-island-gold-copper-project/" },
  // 2024
  { title: "Drilling Commences at Fergusson Island Wapolu Gold Project for Feasibility and Production Planning", date: "December 18, 2024", excerpt: "Drilling commences at the Fergusson Island Wapolu Gold Project for feasibility and production planning.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/drilling-commences-at-fergusson-island-wapolu-gold-project-for-feasibility-and-production-planning/" },
  { title: "Adyton Mobilizes Drone Survey Team To Feni Island", date: "October 31, 2024", excerpt: "Drone survey team mobilised to Feni Island for aerial surveying.", tags: ["Feni", "Exploration"], sourceUrl: "https://adytonresources.com/adyton-mobilizes-drone-survey-team-to-feni-island/" },
  { title: "Adyton Successfully Completes Gameta and Feni Wardens Hearings", date: "October 24, 2024", excerpt: "Successfully completed Gameta and Feni Wardens Hearings.", tags: ["Corporate"], sourceUrl: "https://adytonresources.com/adyton-successfully-completes-gameta-and-feni-wardens-hearings/" },
  { title: "Adyton Resources Welcomes Dr. Chris Bowden as Chief Operating Officer", date: "October 20, 2024", excerpt: "Dr. Chris Bowden appointed as Chief Operating Officer.", tags: ["Corporate", "Leadership"], sourceUrl: "https://adytonresources.com/adyton-resources-welcomes-dr-chris-bowden-as-chief-operating-officer/" },
  { title: "Adyton Resources Corporation Closes Premium To Market USD$5 Million Strategic Private Placement", date: "October 7, 2024", excerpt: "Premium to market USD$5 million strategic private placement closed.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/adyton-resources-corporation-closes-premium-to-market-usd5-million-strategic-private-placement/" },
  { title: "Adyton Resources Corporation Announces Non-Brokered Private Placement", date: "September 30, 2024", excerpt: "Non-brokered private placement announced.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/adyton-resources-corporation-announces-non-brokered-private-placement/" },
  { title: "Adyton Commences Field Work on Feni Island Led by Former Friedland Senior Geologist", date: "August 14, 2024", excerpt: "Field work commenced on Feni Island led by a former Friedland senior geologist.", tags: ["Feni", "Exploration"], sourceUrl: "https://adytonresources.com/adyton-commences-field-work-on-feni-island-led-by-former-friedland-senior-geologist/" },
  { title: "Review of Historical Data on Feni Island Reinforces Significant Cu-Au Discovery Potential", date: "July 18, 2024", excerpt: "Review of existing and historical data reinforces significant copper-gold discovery potential.", tags: ["Feni", "Technical"], sourceUrl: "https://adytonresources.com/review-of-existing-and-historical-data-on-feni-island-reinforces-significant-cu-au-discovery-potential/" },
  { title: "Adyton Identifies Resource Growth Potential with New Untested Drill Targets at the Feni Island Project", date: "June 26, 2024", excerpt: "New untested drill targets identified at the Feni Island Project.", tags: ["Feni", "Exploration"], sourceUrl: "https://adytonresources.com/adyton-identifies-resource-growth-potential-with-new-untested-drill-targets-at-the-feni-island-project/" },
  { title: "Former Exploration Manager for Ivanhoe Mines Mongolia to Strengthen Adyton Board", date: "June 12, 2024", excerpt: "Former Ivanhoe Mines Mongolia exploration manager appointed to strengthen the Adyton Board.", tags: ["Corporate", "Leadership"], sourceUrl: "https://adytonresources.com/former-exploration-manager-for-ivanhoe-mines-mongolia-to-strengthen-adyton-board/" },
  { title: "EVIH Technical and Executive Team Visit Fergusson Island to Commence Feasibility Study", date: "May 29, 2024", excerpt: "EVIH team visits Fergusson Island to commence feasibility study and bulk sample planning.", tags: ["Fergusson", "EVIH JV"], sourceUrl: "https://adytonresources.com/evih-technical-and-executive-team-visit-fergusson-island-to-commence-feasibility-study-and-bulk-sample-planning/" },
  { title: "Adyton and East Vision International Holdings Execute US$9.5M Investment and Development Agreement", date: "May 13, 2024", excerpt: "US$9.5M investment and development agreement executed for the Fergusson Island Gold Project.", tags: ["Fergusson", "EVIH JV"], sourceUrl: "https://adytonresources.com/adyton-and-east-vision-international-holdings-execute-us9-5m-investment-and-development-agreement-for-the-fergusson-island-gold-project/" },
  { title: "Financial Statements and MD&A for the Twelve Months Ended December 31, 2023", date: "April 26, 2024", excerpt: "Annual financial statements and MD&A for the twelve months ended December 31, 2023.", tags: ["Corporate", "Financials"], sourceUrl: "https://adytonresources.com/adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-three-and-twelve-months-ended-december-31-2023/" },
  { title: "Adyton to Recommence Work Activities on Feni Island Gold/Copper Project", date: "April 25, 2024", excerpt: "Work activities to recommence at the Feni Island Gold/Copper Project.", tags: ["Feni", "Operations"], sourceUrl: "https://adytonresources.com/adyton-to-recommence-work-activities-on-feni-island-gold-copper-project/" },
  { title: "Adyton Resources Corporation Announces Closing of Non-Brokered Private Placement", date: "April 19, 2024", excerpt: "Closing of non-brokered private placement announced.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/adyton-resources-corporation-announces-closing-of-non-brokered-private-placement/" },
  { title: "Adyton Resources Corporation Announces Non-Brokered Private Placement", date: "March 27, 2024", excerpt: "Non-brokered private placement announced.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/adyton-resources-corporation-announces-non-brokered-private-placement/" },
  // 2023
  { title: "Financial Statements and MD&A for Q3 2023", date: "November 28, 2023", excerpt: "Financial statements and MD&A for the three and nine months ended September 30, 2023.", tags: ["Corporate", "Financials"], sourceUrl: "https://money.tmx.com/quote/ADY/news/6945287328856502/Adyton_Announces_Filing_of_Financial_Statements_and_MDA_for_the_three_months_and_nine_months_ended_September_30_2023" },
  { title: "Financial Statements and MD&A for Q1 2023", date: "May 29, 2023", excerpt: "Financial statements and MD&A for the three months ended March 31, 2023.", tags: ["Corporate", "Financials"], sourceUrl: "https://money.tmx.com/quote/ADY/news/8972700173546494/Adyton_Announces_Filing_of_Financial_Statements_and_MDA_for_the_three_months_ended_March_31_2023" },
  { title: "Adyton Resources Closes Private Placement", date: "January 25, 2023", excerpt: "Private placement financing closed.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2023/01/PressRelease_Closing-of-financing_20232501.pdf" },
  // 2022
  { title: "Adyton Successfully Completes Gameta Wardens Hearing", date: "December 13, 2022", excerpt: "Gameta Wardens Hearing successfully completed.", tags: ["Fergusson", "Corporate"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2023/01/PressRelease_Gameta_Wardens_hearing_successfully_completed_20221213.pdf" },
  { title: "Adyton Resources Announces Private Placement", date: "December 1, 2022", excerpt: "Private placement announced.", tags: ["Corporate", "Financing"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2023/01/PressRelease_1400k_subscription_20221201_TSX-V.pdf" },
  { title: "Adyton Successfully Completes Wapolu Wardens Hearing", date: "June 3, 2022", excerpt: "Wapolu Wardens Hearing successfully completed.", tags: ["Fergusson", "Corporate"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2022/06/Press_Release_3June2022_Wapolu_Wardens_Hearing.pdf" },
  { title: "Metallurgical Testing Confirms High Concentrate Recoveries", date: "May 26, 2022", excerpt: "Metallurgical test work confirms high concentrate gold recoveries.", tags: ["Technical"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2022/06/Press_Release_26May2022_Metallurgical_test_work.pdf" },
  { title: "Petrographic Study Confirms Feni Porphyry System", date: "March 31, 2022", excerpt: "Petrographic study confirms the porphyry system at Feni Island.", tags: ["Feni", "Technical"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2022/03/Press-Release-March-2022-Feni-Petrology_FINAL.pdf" },
  { title: "PNG Mineral Resources Authority Grants Feni Exploration License Renewal", date: "February 9, 2022", excerpt: "Feni exploration license renewed by the PNG Mineral Resources Authority.", tags: ["Feni", "Corporate"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2022/02/Feni_Renewal-FINAL.pdf" },
  { title: "Key Appointments Strengthen Adyton Board and Management Team", date: "February 7, 2022", excerpt: "Key appointments strengthen the Adyton Board and management team.", tags: ["Corporate", "Leadership"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2022/02/220202_Appointments-strengthen-Board-and-Management-teams-TSX-FINAL.pdf" },
  // 2021
  { title: "Adyton Appoints Independent Director and Restructures Board", date: "December 31, 2021", excerpt: "Independent Director appointed and Board restructured.", tags: ["Corporate", "Leadership"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2022/04/20211230_Board_Changes_December31_Final.pdf" },
  { title: "Adyton Resources Announces Corporate Changes and Financing Update", date: "December 23, 2021", excerpt: "Corporate changes and financing update announced.", tags: ["Corporate"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/12/20211222-ADY-Press-Release-Corporate-Changes-002.pdf" },
  { title: "Adyton Hits Significant Copper at Feni Island: 6.4m @ 5.1% Cu", date: "December 1, 2021", excerpt: "Significant copper intersected at Feni Island including 3.6m @ 6.9% Cu.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/12/011221_Feni_Cu-announcement-TSX-Lodged.pdf" },
  { title: "Adyton Announces Filing of Fergusson Island and Feni Island Technical Reports", date: "November 25, 2021", excerpt: "NI 43-101 technical reports filed for both Fergusson Island and Feni Island.", tags: ["Technical"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/11/25112021-Filing-of-43-101-for-Resource_Final.pdf" },
  { title: "Adyton Reports 88% Increase in Total Gold Resources", date: "October 14, 2021", excerpt: "Total gold resources increased by 88%.", tags: ["Resource"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/10/131021_Adyton-announces-resources-upgrade_Final_Final.pdf" },
  { title: "Adyton Intersects 0.8 g/t Au over 144.8m from Surface at Feni Island", date: "October 13, 2021", excerpt: "Drilling program returns significant intersections at Feni Island from surface.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/10/211011_Adyton_Drilling-program-returns-significant-intersections-at-Feni_Final131021-clean.pdf" },
  { title: "Fergusson Island Exploration Potential Confirmed", date: "September 21, 2021", excerpt: "Exploration potential confirmed at Fergusson Island.", tags: ["Fergusson", "Exploration"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/09/Wapolu-8-Sept-2021-002.pdf" },
  { title: "Adyton Reports Fergusson Island Wapolu Deposit Initial Results", date: "September 8, 2021", excerpt: "Initial results reported from the Fergusson Island Wapolu deposit.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/09/Wapolu-8-Sept-2021-002.pdf" },
  { title: "Adyton Reports Fergusson Island Gameta Trenching", date: "August 25, 2021", excerpt: "Gameta trenching results reported from Fergusson Island.", tags: ["Fergusson", "Exploration"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/08/Gameta-trenching-Aug-2021_Final-edit.pdf" },
  { title: "Adyton Discovers New High Grade Zone at Gameta Gold Project", date: "August 5, 2021", excerpt: "New high grade zone discovered at the Gameta Gold Project.", tags: ["Fergusson", "Exploration"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/08/Adyton-Discovers-New-High-Grade-Zone-at-Gameta.pdf" },
  { title: "Adyton Receives Approval to Commence Trading on the OTCQB Market", date: "July 29, 2021", excerpt: "Approved to commence trading on the OTCQB market.", tags: ["Corporate"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/07/Press-Release-29-July-OTCQB-Listing.pdf" },
  { title: "Adyton Reports 6.0m @ 4.26g/t Au from Gameta Drill Program", date: "July 6, 2021", excerpt: "Mineralisation confirmed beyond existing resource area at Gameta.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/07/6-JulyGameta-Drilling_Final.pdf" },
  { title: "Adyton Mobilises Diamond Drilling Rig at Wapolu Gold Project on Fergusson Island", date: "June 14, 2021", excerpt: "Diamond drilling rig mobilised to the Wapolu Gold Project.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/06/ADY_Fergusson-drilling_14-Jun-21.pdf" },
  { title: "Adyton Reports 6.2m @ 5.58g/t Au from Gameta Drill Program", date: "June 8, 2021", excerpt: "High-grade gold intersections from the Gameta drill program.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/06/Press-Release-9-June-Gameta-Drilling-TSX-Lodged.pdf" },
  { title: "Adyton Announces Mobilisation at Feni Island — Maiden Copper-Gold Diamond Core Drilling Program", date: "June 2, 2021", excerpt: "Maiden copper-gold diamond core drilling program commences at Feni Island.", tags: ["Feni", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/06/June-2021-Feni-Mobilisation_2-Jun-21.pdf" },
  { title: "Adyton Reports 18.1m @ 4.88g/t Au — Further High Grade Gold at Gameta", date: "May 26, 2021", excerpt: "Further high grade gold intersections at the Gameta Gold Project.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/05/Press-Release-26-May-Gameta-Drilling-FINAL.pdf" },
  { title: "Adyton Resources Announces High Grade Gold Intersections from Drilling at Gameta Gold Project", date: "May 5, 2021", excerpt: "High grade gold intersections announced from drilling at the Gameta Gold Project.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/05/202105-04-Press-Release-May-Gameta-Drilling-v8.pdf" },
  { title: "Adyton Resources Begins Drilling Program at Gameta Gold Project", date: "March 23, 2021", excerpt: "Drilling program begins at the Gameta Gold Project.", tags: ["Fergusson", "Drilling"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/05/Press-Release-Adyton-Drilling-Commences-March-2021.pdf" },
  { title: "Adyton Resources Corporation Announces Final Acceptance of TSX Venture Exchange and Resumption of Trading", date: "February 23, 2021", excerpt: "Final acceptance of TSX Venture Exchange and resumption of trading announced.", tags: ["Corporate"], sourceUrl: "https://adytonresources.com/wp/wp-content/uploads/2021/05/20210223-Resumption-of-Trading-on-TSXV.pdf" },
];

const PER_PAGE = 9;

const News = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allNews.length / PER_PAGE);
  const paged = allNews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="container relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">PRESS RELEASES</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            News & Announcements
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl font-body">
            Corporate news, exploration updates, and regulatory filings. All releases link directly to the authoritative source.
          </p>
          <p className="text-sm text-foreground/40 mt-2 font-mono">{allNews.length} announcements</p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paged.map((n, i) => (
              <NewsCard key={`${page}-${i}`} {...n} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => goTo(page - 1)}
                disabled={page === 1}
                className="h-9 w-9"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  variant={p === page ? "gold" : "ghost"}
                  size="sm"
                  onClick={() => goTo(p)}
                  className="h-9 w-9 p-0 font-mono text-xs"
                >
                  {p}
                </Button>
              ))}

              <Button
                variant="ghost"
                size="icon"
                onClick={() => goTo(page + 1)}
                disabled={page === totalPages}
                className="h-9 w-9"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          <p className="text-center text-xs mt-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            All press releases sourced from{" "}
            <a href="https://adytonresources.com/announcements/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              adytonresources.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
