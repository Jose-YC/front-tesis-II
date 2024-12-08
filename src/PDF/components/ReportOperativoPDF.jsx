import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

  const styles = StyleSheet.create({
      page: {
        padding: 40,
        fontSize: 12,
        fontFamily: 'Helvetica',
        backgroundColor: '#ffffff',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        borderBottom: 1,
        borderColor: '#333333',
        paddingBottom: 20,
      },
      headerLeft: {
        flex: 1,
      },
      headerRight: {
        textAlign: 'right',
      },
      title: {
        fontSize: 28,
        fontFamily: 'Helvetica-Bold',
        color: '#333333',
        marginBottom: 4,
      },
      subtitle: {
        fontSize: 12,
        color: '#666666',
      },
      orderInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 4,
      },
      infoSection: {
        flex: 1,
      },
      supplierInfo: {
        marginBottom: 30,
        padding: 15,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 4,
      },
      label: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 11,
        color: '#444444',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 6,
      },
      value: {
        fontSize: 13,
        marginBottom: 4,
        color: '#333333',
      },
      table: {
        marginTop: 20,
      },
      tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#333333',
        padding: 12,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
      tableHeaderText: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'Helvetica-Bold',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      },
      tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
        padding: 12,
        backgroundColor: 'white',
      },
      tableRowAlt: {
        backgroundColor: '#f9f9f9',
      },
      column1: { width: '40%' },
      column2: { width: '20%', textAlign: 'center' },
      column3: { width: '20%', textAlign: 'right' },
      column4: { width: '20%', textAlign: 'right' },
      total: {
        marginTop: 30,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 4,
      },
      totalLabel: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        marginRight: 15,
        color: '#333333',
      },
      totalAmount: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        color: '#333333',
      },
      status: {
        padding: 12,
        borderRadius: 4,
        borderWidth: 1,
      },
      statusText: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      },
      statusPendiente: {
        borderColor: '#666666',
        color: '#666666',
      },
      statusEntregado: {
        borderColor: '#333333',
        color: '#333333',
      },
      statusCancelado: {
        borderColor: '#666666',
        color: '#666666',
      },
      footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        color: '#666666',
        fontSize: 10,
        borderTop: 1,
        borderColor: '#e0e0e0',
        paddingTop: 20,
      },
      chartContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      chart: {
        width: 500,
      },
  });


  export const ReportOperativoPDF = ({report= [], chartImage}) => {
    return (
        <Document>
        <Page size="A4" style={styles.page}>
          <View>
          <View style={styles.chartContainer}>
            <Image src={chartImage} style={styles.chart} />
          </View>
          </View>
  
          <Text style={styles.footer}>
            Este documento es un reporte oficial. Por favor, conserve una copia para sus registros.
          </Text>
        </Page>
      </Document>
    )
  }
  