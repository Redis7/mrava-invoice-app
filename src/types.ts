export type Workflow = {
    id: string;
    fk_invoice_id: string;
    start_workflow_ts: string;
    end_workflow_ts: string | null;
    is_approval_needed: boolean;
    approval_role: string;
    payment_decision: boolean | null;
    payment_mode: string | null;
    payment_amount: number | null;
    payment_is_percentage: boolean | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    is_active: boolean;
  };
  
  export type ApprovalStep = {
    id: string;
    fk_workflow_id: string;
    fk_approval_workflow_id: string | null;
    fk_employee_id: string;
    employee_title:string;
    approval_comment: string | null;
    approval_decision: boolean | null;
    approval_mode: string | null;
    approval_amount: number;
    approval_is_percentage: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    is_active: boolean;
  };
  