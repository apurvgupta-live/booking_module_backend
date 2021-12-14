const mongoose = require("mongoose");
const bookingModuleSchema = new mongoose.Schema(
  {
    contact_name: {
      type: String,
    },
    booking_id: {
      type: String || Number,
    },
    booking_name: {
      type: String,
    },
    stage: { type: String },
    cancellation_reason: {
      type: String,
    },
    cancellation_description: {
      type: String,
    },
    booking_owner: {
      type: String,
    },
    unit_no: {
      type: String,
    },
    tower: { type: String },
    project: { type: String },
    runner_name: {
      type: String,
    },
    runner_contact_no: { type: String },
    created_by: { type: Date },
    created_date_and_time: { type: Date },
    modifed_by: { type: String },
    modifed_date_and_time: { type: Date },

    //STAGE REMARKS
    inventory_accepted_remarks: { type: String },
    inventory_rejected_remarks: { type: String },
    submit_booking_remarks: { type: String },
    accepted_by_remarks: { type: String },
    select_section_with_query: { type: String },
    query_raised_by_so_remarks: { type: String },
    booking_rejected_remarks: { type: String },
    sent_to_developer_remarks: { type: String },
    login_at_developer_remarks: { type: String },
    query_raised_by_developer_remarks: { type: String },
    booking_cancelled_remarks: { type: String },
    bba_uploaded_remarks: { type: String },

    //ASSOCIATE DETAILS
    booking_owner_name: {
      type: String,
    },
    booking_owner_email: {
      type: String,
    },
    reporting_head_name: {
      type: String,
    },
    reporting_head_email: {
      type: String,
    },
    vertical_head_name: {
      type: String,
    },
    vertical_head_email: {
      type: String,
    },
    team: { type: String },
    branch: { type: String },
    booking_done_by: {
      type: String,
    },
    reporting_head_name_bdb: {
      type: String,
    },
    reporting_head_email_bdb: {
      type: String,
    },
    vertical_head_name_bdb: {
      type: String,
    },
    vertical_head_email_bdb: {
      type: String,
    },
    team_bdb: { type: String },
    branch_bdb: { type: String },
    team_manager_email: {
      type: String,
    },

    //SALES REGISTRATION FROM
    booking_form_id: { type: String },
    booking_name: { type: String },
    developer: { type: String },
    property_type: { type: String },
    source_of_fund: { type: String },
    date_of_booking: { type: Date },
    month_of_booking: { type: Date },
    year_of_booking: { type: Date },
    revenue: { type: Number },

    //APPLICANT DETAILS
    client_name: { type: String },
    address: { type: String },
    state: { type: String },
    pincode: { type: Number },
    occupation: { type: String },
    company_name: { type: String },
    designation: { type: String },
    company_adderss: { type: String },
    company_state: { type: String },
    company_pin_code: { type: String },
    pan_no: { type: String || Number },
    aadhar_no: { type: String },
    date_of_birth: { type: Date },
    date_of_anniversary: { type: Date },
    gender: { type: String },
    marital_status: { type: String },
    contact_1: { type: Number },
    contact_2: { type: Number },
    email_id_1: { type: String },
    email_id_2: { type: String },
    net_monthly_income: { type: Number },
    self: { type: Number },
    family: { type: Number },
    add: { type: String },

    //INVENTORY DETAILS
    developer_name: {
      type: String,
    },

    building: { type: String },
    floor_no: { type: Number },
    area: { type: Number },
    area_uom: { type: String },
    developer_spoc_person: {
      type: String,
    },
    developer_spoc_contact_no: {
      type: Number,
    },
    developer_spoc_designation: {
      type: String,
    },
    developer_address: {
      type: String,
    },

    //COSTING DETAILS
    basic_selling_price: {
      type: String,
    },
    inaugural_discount: { type: Number },
    on_form_discount: { type: Number },
    gst: { type: Number },
    bsp_after_discount: { type: Number },
    bsp_without_gst: { type: Number },
    total_bsp_with_gst: { type: Number },

    //UNIT PLC DETAILS

    plc_type: { type: String },
    plc_charge: { type: String },
    plc_amount: { type: Number },
    plc_gst: { type: Number },
    // plc_gst%:{type: Number},
    plc_total: { type: Number },

    //METER/POWER BACKUP

    type: { type: String },
    kw_kva: { type: Number },
    per_kw_kva_charge: { type: Number },
    meter_backup_amount: { type: Number },
    meter_backup_gst: { type: Number },
    // meter backup gst%:{type: Number},
    meter_backup_total: { type: Number },

    //CAR PARKING

    car_parking_type: { type: String },
    no_of_car_parking: { type: String },
    car_parking_cost: { type: Number },
    net_parking_amount: { type: Number },
    //ADD++
    car_parking_amount: { type: Number },
    car_parking_gst: { type: Number },
    // car_parking_gst%:{type: Number},
    car_parking_total: { type: Number },

    //OTHER CHARGES

    other_charge_type: { type: String },
    measure: { type: String },
    other_charge_value: { type: String },
    gst: { type: Number },
    amount_without_gst: { type: Number },
    amount_with_gst: { type: Number },
    //ADD++
    other_charges_amount: { type: Number },
    other_charges_gst: { type: Number },
    other_charges_total: { type: Number },
    gross_property_value: { type: Number },
    total_gst: { type: Number },
    net_property_value: { type: Number },

    //DEBIT NOTE
    credit_note: { type: Number },
    credit_note_amount: { type: Number },
    debit_note: { type: Number },
    debit_note_amount: { type: Number },

    //INCENTIVE/SCHEME
    customer_scheme: { type: String },
    associate_incentive: { type: String },
    incentive: { type: String },
    incentive_amount: { type: String },

    //BROKERAGE DETAILS
    brokerage: { type: Number },
    brokerage_amount: { type: Number },

    //ADD++

    //KYC DETAILS AND VERIFICATIONS

    kyc_status: { type: String },
    kyc_ok_remarks: { type: String },
    kyc_not_ok_remarks: { type: String },
    kyc_pending_remarks: { type: String },
    source_of_fund: { type: String },
    kyc_call_done: { type: String },
    kyc_mail_sent: { type: String },
    kyc_done_by: { type: String },
    kyc_done_by_email_id: { type: String },

    //NOTES

    created_date_and_time: { type: Date },
    created_by: { type: String },
    note: { type: String },
    add: { type: String },

    //ATTACHEMENTS
    attachements_name: { type: String },
    attachements_type: { type: String },
    created_date_and_time: { type: Date },
    created_by: { type: String },
  },
  { timestamps: true }
);
const bookingModule = mongoose.model("BookingModule", bookingModuleSchema);
module.exports = bookingModule;
