// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;

contract covid {


    enum VaccinationStatus {
        Not_Vaccinated, Partially_Vaccinated, Fully_Vaccinated
    }
    
    struct Person{
        uint id;
        string Name;
        uint phoneNumber;
        string Address;
    } 

    struct Hospital{
        uint id;
        uint Hospitalid;
    }

    struct HealthCarePersonal{
        uint id;
        uint HealthCarePersonalNo;
    }

    struct Vaccination{
        uint id;
        Person patient;
        VaccinationStatus status;
        string dateOfFirstVaccination;
        string vaccineName;
        string dateOfSecondVaccination;
        Hospital hospital;
        HealthCarePersonal doctor;

    }

    mapping(uint => Vaccination) public vaccinationsDetails;

    modifier Status(VaccinationStatus v,uint _id) {
        require(vaccinationsDetails[_id].status == v);
        _;
    }

    function Registration(uint _id, string memory _Name, uint _phoneNumber, string memory _Address)public{
       vaccinationsDetails[_id].id = _id;
       vaccinationsDetails[_id].patient.Name = _Name;
       vaccinationsDetails[_id].patient.phoneNumber = _phoneNumber;
       vaccinationsDetails[_id].patient.Address = _Address;
       vaccinationsDetails[_id].status = VaccinationStatus.Not_Vaccinated;

    }


    function FirstVaccine(uint _id, string memory _dateOfFirstVaccination, string memory _vaccineName, uint _Hospitalid,
    uint _HealthCarePersonalNo) public Status(VaccinationStatus.Not_Vaccinated,_id) {
       vaccinationsDetails[_id].status = VaccinationStatus.Partially_Vaccinated;
       vaccinationsDetails[_id].dateOfFirstVaccination = _dateOfFirstVaccination;
       vaccinationsDetails[_id].vaccineName = _vaccineName;
       vaccinationsDetails[_id].hospital.id = _id;
       vaccinationsDetails[_id].hospital.Hospitalid = _Hospitalid;
       vaccinationsDetails[_id].doctor.id = _id;
       vaccinationsDetails[_id].doctor.HealthCarePersonalNo = _HealthCarePersonalNo;
    }


    function SecondVaccine(uint _id, string memory _dateOfSecondVaccination)public Status(VaccinationStatus.Partially_Vaccinated,_id) {
    vaccinationsDetails[_id].status =VaccinationStatus.Fully_Vaccinated;
    vaccinationsDetails[_id].dateOfSecondVaccination = _dateOfSecondVaccination;
    
    }


}