import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PreoperativeRisk() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 p-6">
      <header className="bg-blue-600 text-white text-center p-4 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold">Preoperative Risk Assessment</h1>
      </header>

      <main className="max-w-4xl mx-auto mt-6 space-y-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Risk Classification</h2>
            <p>Patients can be classified into risk categories using standardized assessment tools or electronic self-administered questionnaires.</p>
            {showMore && (
              <p className="mt-2">Risk assessment tools are divided into risk scores and predictive models developed using multivariate analysis.</p>
            )}
            <Button onClick={() => setShowMore(!showMore)} className="mt-2">
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Comorbidity-Based Risk Assessment</h2>
            <p>ASA Physical Status Classification (ASA PS) helps in anesthesia planning but does not account for preoperative physiological or functional status.</p>
            <p>Various indices such as NSQIP, CCI, and RCRI are recommended for cardiovascular risk stratification.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Functional Status & Exercise Tolerance</h2>
            <p>Measured in Metabolic Equivalents (METs). A MET value of 4 or higher suggests lower cardiovascular risk.</p>
            <p>Cardiopulmonary Exercise Testing (CPET) provides comprehensive functional assessment but requires specialized facilities.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">Surgical Risk by Procedure</h2>
            <ul className="list-disc list-inside">
              <li>Minor surgeries (e.g., cataract) - <1% risk</li>
              <li>Intermediate surgeries (e.g., ENT, orthopedic) - ~1% risk</li>
              <li>Major surgeries (e.g., intra-abdominal, neurosurgery) - ≥3% risk</li>
              <li>High-risk surgeries (e.g., vascular, thoracic, transplant) - ≥5% risk</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
