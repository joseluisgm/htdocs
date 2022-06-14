<?php
namespace WPSMTP;


class Db {

	private $db;

	private $table;

	private static $instance;

	public static function get_instance() {

		if ( ! self::$instance ) {
			self::$instance = new static();
		}

		return self::$instance;
	}

	private function __construct() {
		global $wpdb;

		$this->db = $wpdb;
		$this->table = $wpdb->prefix . 'wpsmtp_logs';
	}

	public function insert( $data ) {

		array_walk( $data, function ( &$value, $key ) {
			if ( is_array( $value ) ) {
				$value = maybe_serialize( $value );
			}
		});

		$result_set = $this->db->insert(
			$this->table,
			$data,
			array_fill( 0, count( $data ), '%s' )
		);

		if ( ! $result_set ) {
			error_log( 'WP SMTP Log insert error: ' . $this->db->last_error );

			return false;
		}

		return $this->db->insert_id;
	}

	public function update( $data, $where = array() ) {
		array_walk( $data, function ( &$value, $key ) {
			if ( is_array( $value ) ) {
				$value = maybe_serialize( $value );
			}
		});

		$this->db->update(
			$this->table,
			$data,
			$where,
			array_fill( 0, count( $data ), '%s' ),
			array( '%d' )
		);
	}

	public function get_item( $id ) {
		$sql = sprintf( "SELECT * from {$this->table} WHERE `id` = '%d';", $id );

		return $this->db->get_results( $sql, ARRAY_A );

	}

	public function get() {
		$where = '';
		$where_cols = array();
		if ( isset($_GET['search']['value'] ) && ! empty( $_GET['search']['value'] ) ) {
			$search = sanitize_text_field( $_GET['search']['value'] );

			foreach ( $_GET['columns'] as $key => $col ) {
				if ( $col['searchable'] && ! empty( $col['data'] ) && $col['data'] !== 'timestamp' ) {
					$where_cols[] = "`{$col['data']}` LIKE '%$search%'";
				}
			}

			if ( ! empty( $where_cols ) ) {
				$where .= ' WHERE ' . implode( ' OR ', $where_cols );
			}

		}

		$limit = array();
		if ( isset( $_GET['start'] ) ) {
			$limit[] = absint( $_GET['start'] );
		}

		if ( isset( $_GET['length'] ) ) {
			$limit[] = absint( $_GET['length'] );
		}

		$limit_query = '';
		if ( ! empty( $limit ) ) {
			$limit_query = ' LIMIT ' . implode( ',', $limit );
		}

		$order = ' ORDER BY `timestamp` desc';
		if ( ! empty( $_GET['order'][0] ) ) {
			$col_num = $_GET['order'][0]['column'];
			$col_name = $_GET['columns'][$col_num]['data'];
			$order_dir = $_GET['order'][0]['dir'];
			$order = " ORDER BY `{$col_name}` {$order_dir}";
		}

		$sql = "SELECT * from {$this->table}{$where}{$order}{$limit_query};";

		error_log( $sql );

		return $this->db->get_results( $sql, ARRAY_A );

	}

	public function delete_items( $ids ) {
		return $this->db->query( "DELETE FROM {$this->table} WHERE mail_id IN(" . implode(',', $ids) . ")" );
	}

	public function delete_all_items() {
		return $this->db->query( "TRUNCATE {$this->table};" );
	}

	public function records_count() {
		return $this->db->get_var( "SELECT COUNT(*) FROM {$this->table};" );
	}
}