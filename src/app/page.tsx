"use client";

import {
  FlowSelection,
  FlowSelections,
  FlowSelectionTitle,
  FlowStep,
  FlowStepContent,
  FlowStepTitle
} from "@/components/flow";
import { FlowSelectionContent } from "@/components/flow-step";

export default function Home() {
  return (
    <main className="min-h-screen h-screen w-full flex flex-col">
      <FlowStep bg="/images/01.jpeg" variant="secondary">
        <FlowStepTitle>
          GOURMET EXPERIENCE
        </FlowStepTitle>
        <FlowStepContent>
          <div className="p-8 rounded-lg">
            <h3>Culinary Masterpieces</h3>
            <p>Indulge in our gastronomic symphony where locally-sourced heirloom tomatoes dance with aged balsamic reduction. Our chef&apos;s tasting menu features hand-harvested microgreens and butter-poached lobster tail, finished with edible gold leaf and Madagascar vanilla foam.</p>
          </div>
        </FlowStepContent>
        <FlowSelections>
          
          <FlowSelection bg="/images/02.jpeg">
            <FlowSelectionTitle hasContent={true}>Farm-to-Table</FlowSelectionTitle>
            <FlowSelectionContent>ORGANIC HARVEST</FlowSelectionContent>
          </FlowSelection>
          
          <FlowSelection bg="/images/03.jpeg">
            <FlowSelectionTitle>Molecular Gastronomy</FlowSelectionTitle>
          </FlowSelection>
          
          <FlowSelection>
            <FlowSelectionTitle>Artisinal Desserts</FlowSelectionTitle>
            {/* <FlowSelectionContent variant="alt">
              <h3 className={"w-full py-20 p-2 text-center font-semibold"}
                style={{ textShadow: `3px 3px 3px #000000cc` }}
              >
                ARTISANAL DESSERTS
              </h3>
            </FlowSelectionContent> */}
          </FlowSelection>

        </FlowSelections>
      </FlowStep>
    </main>
  );
}
