"use client";

import FlowStep, {
  FlowStepTitle,
  FlowStepContent,
  FlowSelections,
  FlowSelection,
  FlowSelectionTitle,
  FlowSelectionContent,
} from "@/components/flow-step";

export default function Home() {
  return (
    <main className="min-h-screen h-screen w-full flex flex-col">
      <FlowStep bg="/images/01.jpeg" variant="muted">
        <FlowStepTitle>
          GOURMET EXPERIENCE
        </FlowStepTitle>
        <FlowStepContent>
          <div className="p-12 rounded-lg">
            <h2>Culinary Masterpieces</h2>
            <p>Indulge in our gastronomic symphony where locally-sourced heirloom tomatoes dance with aged balsamic reduction. Our chef&apos;s tasting menu features hand-harvested microgreens and butter-poached lobster tail, finished with edible gold leaf and Madagascar vanilla foam.</p>
          </div>
        </FlowStepContent>
        <FlowSelections>
          <FlowSelection bg="/images/02.jpeg">
            <FlowSelectionTitle>Farm-to-Table</FlowSelectionTitle>
            <FlowSelectionContent>
              <div className="w-fit h-fit m-auto text- mt-10 p-2 rounded-lg">
                <p className="font-semibold">
                  ORGANIC HARVEST
                </p>
              </div>
            </FlowSelectionContent>
          </FlowSelection>
          <FlowSelection bg="/images/03.jpeg">
            <FlowSelectionTitle>Molecular Gastronomy</FlowSelectionTitle>
            <FlowSelectionContent>
              <div className="w-fit h-fit m-auto text- mt-10 p-2 rounded-lg">
                <p className="font-semibold">
                  CULINARY SCIENCE
                </p>
              </div>
            </FlowSelectionContent>
          </FlowSelection>
          <FlowSelection bg="/images/04.jpeg">
            <FlowSelectionContent>
              <h2 className={"w-full py-20 p-2 text-center font-semibold"}
                style={{ textShadow: `2px 2px 2px #22222299` }}
              >
                ARTISANAL DESSERTS
              </h2>
            </FlowSelectionContent>
          </FlowSelection>
          <FlowSelection bg="/images/05.jpeg">
            <FlowSelectionContent>
              <h2 className={"w-full py-20 p-2 text-center font-semibold"}
                style={{ textShadow: `2px 2px 2px #22222299` }}
              >
                GORGEOUS STUFF
              </h2>
            </FlowSelectionContent>
          </FlowSelection>
        </FlowSelections>
      </FlowStep>
    </main>
  );
}
