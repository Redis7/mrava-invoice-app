// import approvalWorkflow from './data/approval_workflow.json';
// import workflowStart from './data/workflow_start.json';
// import workflowEnd from './data/workflow_end.json';
// import type { ApprovalStep, Workflow } from './types';


// function App() {
//   const approvals: ApprovalStep[] = approvalWorkflow;
//   const workflow: Workflow = workflowStart[0];
//   const finalWorkflow: Workflow = workflowEnd[0];

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold text-blue-600 mb-4">Redis Invoice Approval Dashboard</h1>

//       <div className="bg-gray-50 p-4 rounded mb-6">
//         <h2 className="font-semibold text-lg">Workflow Started</h2>
//         <p>Invoice ID: {workflow.fk_invoice_id}</p>
//         <p>Started at: {new Date(workflow.start_workflow_ts).toLocaleString()}</p>
//       </div>

//       <div>
//         {approvals.map((step, i) => (
//           <div key={step.id} className="mb-4 p-4 bg-white shadow border-l-4 border-blue-400 rounded">
//             <h3 className="font-semibold">{step.fk_employee_id}</h3>
//             <p>Mode: {step.approval_mode}</p>
//             <p>Amount: €{step.approval_amount}</p>
//             <p>Decision: {step.approval_decision === true ? '✅ Approved' : step.approval_decision === false ? '❌ Rejected' : '⏳ Pending'}</p>
//             <p className="italic text-sm text-gray-500">"{step.approval_comment}"</p>
//             <p className="text-xs text-gray-400">{new Date(step.created_at).toLocaleString()}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 bg-green-50 p-4 rounded border-l-4 border-green-400">
//         <h2 className="font-semibold text-lg text-green-700">Final Decision</h2>
//         <p>Decision: {finalWorkflow.payment_decision ? '✅ Approved' : '❌ Rejected'}</p>
//         <p>Mode: {finalWorkflow.payment_mode}</p>
//         <p>Amount: €{finalWorkflow.payment_amount}</p>
//         <p>Ended at: {new Date(finalWorkflow.end_workflow_ts || '').toLocaleString()}</p>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
import workflowStart from './data/workflow_start.json';
import approvalWorkflow from './data/approval_workflow.json';
import workflowEnd from './data/workflow_end.json';
import type { ApprovalStep, Workflow } from './types';

function App() {
  const approvals: ApprovalStep[] = approvalWorkflow;
  const workflow: Workflow = workflowStart[0];
  const finalWorkflow: Workflow = workflowEnd[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-10">Redis Invoice Approval Dashboard</h1>

        {/* Invoice Summary Box */}
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <h2 className="text-lg font-bold text-blue-700 mb-1">📄 Invoice Summary</h2>
          <p className="text-gray-700">
            This page shows the full approval process for invoice <strong>{workflow.fk_invoice_id}</strong>.  
            It went through <strong>{approvals.length}</strong> approval steps involving different team members.  
            The final payment decision is displayed at the bottom.
          </p>
        </div>

        {/* Workflow Details */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">📄 Invoice Details</h2>
          <p><strong>Invoice ID:</strong> {workflow.fk_invoice_id}</p>
          <p><strong>Started:</strong> {new Date(workflow.start_workflow_ts).toLocaleString()}</p>
          <p><strong>Approval Role:</strong> {workflow.approval_role}</p>
        </div>

        {/* Timeline */}
        <h2 className="text-xl font-semibold mb-4">🕓 Approval Timeline</h2>
        <div className="relative border-l-2 border-blue-400 pl-6 ml-2">
          {approvals.map((step, index) => (
            <div key={step.id} className="mb-6 relative">
              <div className="absolute -left-6 top-1 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <div className="bg-white shadow-lg rounded-xl p-5 transition hover:shadow-xl">
              <div className="text-lg font-semibold text-blue-800">{step.employee_title}</div>
                {/* <div className="text-lg font-semibold text-blue-800">{step.fk_employee_id}</div> */}
                <div className="text-gray-700">Mode: {step.approval_mode}</div>
                <div className="text-gray-700">Amount: €{step.approval_amount}</div>
                <div className="text-gray-700">
                  Decision: {step.approval_decision === true ? '✅ Approved' : step.approval_decision === false ? '❌ Rejected' : '⏳ Pending'}
                </div>
                {step.approval_comment && (
                  <div className="text-sm italic text-gray-500 mt-2">"{step.approval_comment}"</div>
                )}
                <div className="text-xs text-gray-400 mt-1">
                  ⏱ {new Date(step.created_at).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Decision */}
        <div className="mt-8 bg-green-100 p-5 rounded-xl border-l-4 border-green-600 shadow-md">
          <h2 className="font-semibold text-lg text-green-700 mb-2">✅ Final Decision</h2>
          <p>Decision: {finalWorkflow.payment_decision ? '✅ Approved' : '❌ Rejected'}</p>
          <p>Mode: {finalWorkflow.payment_mode}</p>
          <p>Amount: €{finalWorkflow.payment_amount}</p>
          <p className="text-sm text-gray-500 mt-1">
            Ended: {new Date(finalWorkflow.end_workflow_ts || '').toLocaleString()}
          </p>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 mt-12">
          Built for testing purposes by Redis
        </div>
      </div>
    </div>
  );
}

export default App;
