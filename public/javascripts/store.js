Vue.use(Vuex);

var model = {
  namespaced: true,
  state: {
  },

  mutations: {
  }
};

var store = new Vuex.Store({
  state: {
    forms: [
        'contactInfo',
        'member',
        'finances',
        'creditHistory',
        'driversLicense'
    ],

    applications: [
      {
        application: "AffordableHousing_Application sales-Fields.pdf",
        name: "affordableHousingApplication",
        label: "Affordable Housing Application",
        selected: false
      },
      {
        application: "Application-GF-Fields.pdf",
        name: "applicationGF",
        label: "Application GF",
        selected: false
      },
      {
        application: "Application-PCV-Fields.pdf",
        name: 'applicationPCV',
        label: 'Application PCV',
        selected: false
      },
      {
        application: "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf",
        name: 'avalonPrinceton',
        label: 'Avalon Princeton',
        selected: false
      }
    ],

    fields: [
      {"type":"text", "label":"Address", "name":"address", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"contactinfo"},
      {"type":"text", "label":"Applicant's signature", "name":"applicantSignature", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date signed", "name":"applicantSignatureDate", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Account Type ", "name":"assetAccountType1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"finances"},
      {"type":"text", "label":"Account Type ", "name":"assetAccountType2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Account Type ", "name":"assetAccountType3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Account Type ", "name":"assetAccountType4", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Asset 1 (Dollar value)", "name":"assetAmount1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"finances"},
      {"type":"text", "label":"Asset 2 (Dollar value)", "name":"assetAmount2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Asset 3 (Dollar value)", "name":"assetAmount3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Asset 4 (Dollar value)", "name":"assetAmount4", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Cell", "name":"cell", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"contactinfo"},
      {"type":"text", "label":"City", "name":"city", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"contactinfo"},
      {"type":"text", "label":"Date signed", "name":"coApplicantDate", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Co-Applicant's signature", "name":"coApplicantSignature", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Co-Applicant's signature", "name":"coApplicantSignature1", "value":"", "requiredBy":["Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Co-Applicant's signature", "name":"coApplicantSignature2", "value":"", "requiredBy":["Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date signed", "name":"coApplicantSignatureDate", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date signed", "name":"coApplicantSignatureDate1", "value":"", "requiredBy":["Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date signed", "name":"coApplicantSignatureDate2", "value":"", "requiredBy":["Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Credit Card Name", "name":"creditCardName1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":"credithistory"},
      {"type":"text", "label":"Credit Card Name", "name":"creditCardName2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Credit Card Name", "name":"creditCardName3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Credit Card Name", "name":"creditCardName4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Driver's License Number", "name":"driversLicenseNumber1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"driverslicense"},
      {"type":"text", "label":"Driver's License Number", "name":"driversLicenseNumber2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"driverslicense"},
      {"type":"text", "label":"Driver's License Number", "name":"driversLicenseNumber3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"driverslicense"},
      {"type":"text", "label":"State", "name":"driversLicenseState1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"driverslicense"},
      {"type":"text", "label":"State", "name":"driversLicenseState2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"driverslicense"},
      {"type":"text", "label":"State", "name":"driversLicenseState3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"driverslicense"},
      {"type":"text", "label":"E-Mail", "name":"email", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":"contactinfo"},
      {"type":"text", "label":"Extra Income ($)", "name":"extraIncomeAmount1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"finances"},
      {"type":"text", "label":"Extra Income ($)", "name":"extraIncomeAmount2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Extra Income ($)", "name":"extraIncomeAmount3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Extra Income ($)", "name":"extraIncomeAmount4", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"per", "name":"extraIncomeFrequency1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"finances"},
      {"type":"text", "label":"per", "name":"extraIncomeFrequency2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"per", "name":"extraIncomeFrequency3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"per", "name":"extraIncomeFrequency4", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Source", "name":"extraIncomeSource1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Source", "name":"extraIncomeSource2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Source", "name":"extraIncomeSource3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Source", "name":"extraIncomeSource4", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Asian/Pacific", "name":"hasAsianPacificEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Black", "name":"hasBlackEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Both", "name":"hasBothPreference", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Buy", "name":"hasBuyPreference", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"", "name":"hasHispanicEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Indian/Asian", "name":"hasIndianAsianEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Islander", "name":"hasIslanderEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"", "name":"hasNonHispanicEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"No", "name":"hasntSexOffense", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"No", "name":"hasntSpecialNeeds", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Other", "name":"hasOtherEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Rent", "name":"hasRentPreference", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Yes", "name":"hasSexOffense", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"Yes", "name":"hasSpecialNeeds", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":''},
      {"type":"text", "label":"White", "name":"hasWhiteEthnicity", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"", "name":"home", "value":"", "requiredBy":["Application-GF-Fields.pdf"], "form":"contactinfo"},
      {"type":"text", "label":"Hispanic", "name":"isHispanic", "value":"", "requiredBy":["Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Non-Hispanic", "name":"isNonHispanic", "value":"", "requiredBy":["Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Last Payment Date", "name":"lastPaymentDate1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":"credithistory"},
      {"type":"text", "label":"Last Payment Date", "name":"lastPaymentDate2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Last Payment Date", "name":"lastPaymentDate3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Last Payment Date", "name":"lastPaymentDate4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Lender's Name", "name":"lenderName1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":"credithistory"},
      {"type":"text", "label":"Lender's Name", "name":"lenderName2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Lender's Name", "name":"lenderName3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Lender's Name", "name":"lenderName4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Loan Balance", "name":"loanBalance1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":"credithistory"},
      {"type":"text", "label":"Loan Balance", "name":"loanBalance2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Loan Balance", "name":"loanBalance3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Loan Balance", "name":"loanBalance4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Loan Type", "name":"loanType1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":"credithistory"},
      {"type":"text", "label":"Loan Type", "name":"loanType2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Loan Type", "name":"loanType3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf"], "form":''},
      {"type":"text", "label":"Household member's name", "name":"member1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"member"},
      {"type":"text", "label":"Household member's name", "name":"member2", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Household member's name", "name":"member3", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Household member's name", "name":"member4", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Household member's name", "name":"member5", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Household member's name", "name":"member6", "value":"", "requiredBy":["Application-GF-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date of Birth", "name":"memberDOB1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"member"},
      {"type":"text", "label":"Date of Birth", "name":"memberDOB2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date of Birth", "name":"memberDOB3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date of Birth", "name":"memberDOB4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date of Birth", "name":"memberDOB5", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Date of Birth", "name":"memberDOB6", "value":"", "requiredBy":["Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employer", "name":"memberEmployer1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"member"},
      {"type":"text", "label":"Employer", "name":"memberEmployer2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employer", "name":"memberEmployer3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employer", "name":"memberEmployer4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employer", "name":"memberEmployer5", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employment Duration", "name":"memberEmploymentDuration1", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"member"},
      {"type":"text", "label":"Employment Duration", "name":"memberEmploymentDuration2", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employment Duration", "name":"memberEmploymentDuration3", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employment Duration", "name":"memberEmploymentDuration4", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Employment Duration", "name":"memberEmploymentDuration5", "value":"", "requiredBy":["AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":''},
      {"type":"text", "label":"Gross Annual Income", "name":"memberGrossAnnualIncome1", "value":"", "requiredBy":["Application-GF-Fields.pdf", "AffordableHousing_Application sales-Fields.pdf", "Application-PCV-Fields.pdf", "Avalon Princeton - Preliminary Application Rev-Mar-2016-Fields.pdf"], "form":"member"}
    ],

    activeFields: []
  },

  getters: {
    fields: (state, getters) => (form) => {
      var isInForm = (field) => {
        return field.form === form
      };
      
      var fields = state.activeFields.filter(isInForm);

      return fields;
    }
  },

  mutations: {
    updateField(state, { field, value }){
      var field = state.fields.find( a => a.name === field );
      field.value = value;
    },

    updateApplication(state, applicationName){
      var application = state.applications.find(
        a => a.name === applicationName
      );

      application.selected = !application.selected;
    },

    updateActiveFields(state){
      var isActiveApplication = (name) => {
        var is = state.applications.find(
          (a) => a.application === name
        ).selected;

        return is;
      }

      var isInActiveApplication = (field) => 
        field.requiredBy.some(isActiveApplication);

      var activeFields = state.fields.filter(isInActiveApplication);

      state.activeFields = activeFields;
    }
  },

  actions: {
    updateApplicationSelections({ state, commit }, applicationName){
      //update selection
      commit('updateApplication', applicationName);
          //update
      commit('updateActiveFields');
    }
  }
});
