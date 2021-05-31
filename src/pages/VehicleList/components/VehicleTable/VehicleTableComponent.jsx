/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { MDBDataTable } from 'mdbreact';
import getUuid from 'uuid-by-string';
import { wordFormatter, batteryFormatter } from '../../../../utils/tableUtils';
import styles from './VehicleTableComponent.module.scss';

const VehicleTableComponent = ({ vehicles }) => {
  if (vehicles.content) {
    const rowData = vehicles.content.map((content, i) => {
      let dataTable = {};
      dataTable = {
        vehicleID: i,
        qrCode: getUuid(content.qrCode),
        status: wordFormatter(content.status),
        location: '',
        batteryLevel: batteryFormatter(content.batteryLevel),
        operation: ''
      }
      return dataTable
    });

    console.log(vehicles);

    const data = {
      columns: [
        {
          label: 'VehicleID',
          field: 'vehicleID',
          sort: 'asc',
          width: 300,
        },
        {
          label: 'QR Code',
          field: 'qrCode',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Location',
          field: 'location',
          sort: 'asc',
          width: 250,
        },
        {
          label: 'Battery Level',
          field: 'batteryLevel',
          sort: 'asc',
          width: 300,
        },
        {
          label: 'Operation',
          field: 'operation',
          sort: 'asc',
          width: 500,
        },
      ],
      rows: rowData,
    };

    return (
      <MDBDataTable
        striped
        bordered
        responsive
        small
        data={data}
        className={styles.dataTable}
      />
    );
  } else {
    return (
      <h3>Please Wait...</h3>
    )
  }
};

VehicleTableComponent.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      qrCode: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      batteryLevel: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default VehicleTableComponent;