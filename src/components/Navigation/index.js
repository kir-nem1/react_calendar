import React from 'react';
import moment from "moment";
import styles from './NavigationStyles.module.css';
import PropTypes from 'prop-types';

class Navigation extends React.Component {
constructor (props) {
	super(props);
	this.state = {
		dateObject: moment(),
		showMonth: true,
	};

}

	/*month = () => {
		return this.state.dateObject.format("MMMM");
*/

		render()
		{

			const {isMenuOpen} = this.state;

			return (
				<div className={styles.container}>
					<nav className={styles.navContainer}>
						<div className={styles.navItem}>May</div>
						<div className={styles.currentItem}>June</div>
						<div className={styles.navItem}>Jul</div>
					</nav>
					<div className={styles.downMenu}>
					</div>
				</div>
			);
		}

	}


export default Navigation;