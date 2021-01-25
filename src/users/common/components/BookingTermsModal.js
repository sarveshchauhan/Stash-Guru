import React, { useState } from 'react'
import { Modal, Button, Form, Alert, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getSignInTerms, termsSignIn, toggleBookingTermsModal } from '../../../redux';
import './bookingComp.css';

function BookingTermsModal() {

    const { showBookingTermsModal, signInLoading, signInError, termsDetail, termsLoading, termsError } = useSelector(state => state.booking);

    const { authResponse } = useSelector(state => state.auth);
    const { schDetails } = useSelector(state => state.search);

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [signIn, setSignIn] = useState(false);

    const [nameError, setNameError] = useState("");
    const [signInErrorr, setSignInErrorr] = useState("");


    const onSubmitForm = (e) => {

        e.preventDefault();

        let error = false;

        setNameError("");
        setSignInErrorr("");

        if (!name) {
            setNameError("Name is required!");
            error = true;
        }

        if (!signIn) {
            setSignInErrorr("Please agree the terms");
            error = true;
        }

        if (!error) {
            dispatch(termsSignIn({
                sign_in: "Yes",
                sign_in_name: name
            }))
        }

    }


    return (
        <>
            <Modal
                show={showBookingTermsModal}
                onHide={() => dispatch(toggleBookingTermsModal(false))}
                onShow={() => dispatch(getSignInTerms())}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton className="modal-header">
                    <Modal.Title>StashGuru Booking Terms</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {
                        termsLoading ? <div className="text-center"> <Spinner animation="border" variant="success" /> </div> :
                            <div className="terms-div">


                                <p>Signing these terms will help to protect your booking in case anything goes wrong. It's a mandatory step before the booking can start.</p>
                                <p>Please review them carefully and sign by typing your name when you're ready.</p>

                                <p>
                                    <strong>Name of Guest:</strong>
                                    <br />
                                    {authResponse && authResponse.users && authResponse.users.name}
                                </p>

                                <p>
                                    <strong>Name of Host:</strong>
                                    <br />
                                    {schDetails.u_name}
                                </p>

                                <hr />
                                {termsDetail}
                                {/* <h4>Prohibited Items</h4>
                            <p>You confirm that you are not storing any of the following items (unless otherwise agreed in writing):</p>
    
                            <ul>
                                <li>A stolen vehicle (including bicycles) or a vehicle taken without its owner’s permission;</li>
                                <li>Any kind of weapon (including guns), explosives, munitions or fireworks</li>
                                <li>Anything illegal, including any class of drug, drug paraphernalia, stolen property, or anything which you can get arrested for possessing;</li>
                                <li>Any kind of food, drink or perishable good, including fruit, vegetables, meat, cheese;</li>
                                <li>Anything which was (or is) alive, including animals, plants, insects, fungus, or bacteria;</li>
                                <li>Anything which produces a strong smell, produces gas, leaks liquid, or is damp;</li>
                                <li>Any liquid, hazardous, polluted, flammable, contaminated, radioactive, or toxic materials;</li>
                                <li>Anything damp, mouldy, rotten, or moth-infested;</li>
                                <li>Anything that creates noises, generates heat, may increase in size and / or burst; or</li>
                                <li>Any cash or securities.</li>
                            </ul>
    
                            <hr />
    
                            <h4>General Terms</h4>
                            <ul>
                                <li>The terms Guest and Host in these Booking Terms have the same meaning as the respective terms Storage Guest and Storage Host in the Stashbee Terms and Conditions.</li>
                                <li>The Booking Terms incorporate all clauses of the Stashbee Terms and Conditions and the Cancellations and Refunds policy, except where explicitly stated otherwise.</li>
                                <li>The Host agrees to rent storage space located at the address specified in the booking made via the Stashbee platform (the “Storage Space”) to the Guest subject to these Booking Terms.</li>
                                <li>
                                    The Monthly Rental for the Storage Space (referred to as “Price” in the Terms and Conditions) is specified in the booking agreed between the Guest and the Host via the Stashbee platform.</li>
                                <li>The Monthly Rental shall be collected on a monthly basis by Stashbee on behalf of the Host. Stashbee shall then pay out the Monthly Rental to the Host minus the Stashbee Fee in accordance with the Terms and Conditions.</li>
                                <li>Neither party shall be permitted to terminate the booking before the end of the minimum rental period agreed between the Guest and the Host via the Stashbee platform (“Minimum Rental Period”). The Minimum Rental Period commences on the start date of the booking.</li>
                                <li>If the Guest terminates the booking before the end of the Minimum Rental Period, the Guest will be liable to pay any Monthly Rental due for the remainder of the Minimum Rental Period. Stashbee reserves the right to deduct any sums owing due to a breach of this clause from the Security Deposit paid by the Guest at the start of the booking.</li>
                                <li>The “Estimated Duration” entered in the booking process is indicative only, and the Guest must provide 1 calendar month’s notice in writing to Stashbee and the Host to end the booking, unless otherwise agreed in writing.</li>
                                <li>The Host must provide a minimum of two (2) calendar months’ notice in writing to Stashbee and the Guest to end the booking, unless otherwise agreed in writing.</li>
                                <li>Until notice is provided by the Guest or the Host, the booking will continue on a monthly rolling basis. Notice must be provided via the booking dashboard on the Stashbee platform.</li>
                                <li>Notwithstanding clauses 6-10, either party will have the right to end the booking with immediate effect if the other party is found to have breached these Booking Terms.</li>
                                <li>Hosts who have enabled Instant Book agree to take any booking from a Guest provided that the Guest completes their Move-in Checklist and is not otherwise found to have breached the Booking Terms.</li>
                                <li>The Host is responsible for ensuring any key or fob that may be required to gain entry to the Storage Space is in working order prior to the start of the booking. The Host must retain a copy of all keys or fobs given to the Guest.</li>
                                <li>The Host is responsible for replacing any lock and key to the Storage Space at their own expense unless the replacement is required due to a key or fob being lost or damaged by the Guest.</li>
                                <li>
                                    The Guest is not permitted to make any changes to the Storage Space, including replacing or installing new security locks, without written permission from the Host. Any changes and associated costs must be agreed in writing before being carried out.</li>
                                <li>If any new keys or fobs are made by the Guest, a copy must be provided to the Host.</li>
                                <li>
                                    The Guest must make sure the Storage Space is clear of all waste and rubbish at all times specified on the booking.</li>
                                <li>The Guest is responsible for packaging their stored items in a suitable manner to make sure items do not get damaged, taking into consideration the type of Storage Space being rented. For example, waterproof packaging may be suitable for certain garages.</li>
                                <li>The Guest is responsible for any additional insurance required for the stored items – over and above the standard insurance offered by Stashbee’s third-party partner</li>
                                <li>If storing in a Stashbee ‘Flexi Space’, the Guest agrees to send a photograph of their items stored in the space within 7 calendar days of their move-in to</li>
                            </ul>
    
                            <h3>By agreeing to these Booking Terms, you also agree to be bound by the provisions of the following documents:</h3>
                            <ul>
                                <li>Stashbee Terms & Conditions</li>
                                <li>Stashbee Cancellations & Refunds policy</li>
                            </ul> */}

                                <Form.Control placeholder="Type Your Full Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>

                                <Form.Check label="I agree to these Booking Terms" className="mt-2" checked={signIn} onChange={(e) => setSignIn(e.target.checked)} />



                                {
                                    nameError && <Alert variant="danger">{nameError}</Alert>
                                }

                                {
                                    signInError && <Alert variant="danger">{signInError}</Alert>
                                }

                                {
                                    signInErrorr && <Alert variant="danger">{signInErrorr}</Alert>
                                }

                                {
                                    termsError && <Alert variant="danger">{termsError}</Alert>
                                }

                                {
                                    signInLoading && <Spinner animation="border" variant="success" />

                                }




                            </div>



                    }

                </Modal.Body>
                <Modal.Footer>



                    <Button className="px-5 mdlBtnFooterClose" variant="light" onClick={() => dispatch(toggleBookingTermsModal(false))}> Close </Button>
                    <Button className="px-5" variant="success" type="button" disabled={signInLoading} onClick={onSubmitForm}>Sign Booking Terms</Button>



                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookingTermsModal
