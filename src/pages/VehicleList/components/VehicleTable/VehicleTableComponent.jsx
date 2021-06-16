import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { MDBDataTable } from 'mdbreact';
import { wordFormatter, batteryFormatter } from '../../../../utils/tableUtils';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from './VehicleTableComponent.module.scss';

const VehicleTableComponent = ({ vehicles }) => {
  if (vehicles.content) {
    const rowData = vehicles.content.map(content => {
      let dataTable = {};
      dataTable = {
        vehicleID: content.uuid,
        qrCode: content.qrCode,
        status: wordFormatter(content.status),
        location: '',
        batteryLevel: batteryFormatter(content.batteryLevel),
        operation: (
          <div className={styles.operationButtons}>
            <button className={styles.opEdit} type="button">Edit</button>
            <button className={styles.opOr} type="button">Order</button>
            <button className={styles.opCity} type="button">Change City/Region</button>
            <button className={styles.opStat} type="button">Change Status</button>
          </div>
        ),
      }
      return dataTable
    });

    const data = {
      columns: [
        {
          label: 'VehicleID',
          field: 'vehicleID',
          sort: 'asc',
          width: 100,
        },
        {
          label: 'QR Code',
          field: 'qrCode',
          sort: 'asc',
          width: 300,
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
          width: 120,
        },
        {
          label: 'Operation',
          field: 'operation',
          sort: 'asc',
          width: 800,
        },
      ],
      rows: rowData,
    };

    return (
      <MDBDataTable
        striped
        bordered
        small
        responsive
        data={data}
        className={styles.dataTable}
        maxHeight="200px"
      />
    );
  } else {
    return (
      <div className={styles.vehicleListLoader}>
        <Loader
          type="Grid"
          color="#03989E"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    )
  }
};

VehicleTableComponent.propTypes = {
  vehicles: PropTypes.shape({
    content: PropTypes.arrayOf(
      PropTypes.shape({
        uuid: PropTypes.string,
        qrCode: PropTypes.string,
        status: PropTypes.string,
        batteryLevel: PropTypes.number,
      }),
    ),
  })
};

export default VehicleTableComponent;