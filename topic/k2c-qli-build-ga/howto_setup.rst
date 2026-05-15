.. _howto_setup:

Setup
------------------

.. _connect_uart:

Connect to a UART shell
^^^^^^^^^^^^^^^^^^^^^^^^^

.. container:: persistenttab-soc

   .. tabs::

      .. group-tab:: QCS6490/QCS5430
         
         To set up the debug UART connection and view the diagnostic messages, connect the micro-USB cable from the micro-USB port on the device to the Linux host.

         .. image:: ../../media/k2c-qli-build-ga/micro_usb_port.png

      .. group-tab:: IQ-9075

         .. tabs:: 

            .. group-tab:: IQ-9 Beta EVK

               To set up the debug UART connection and view the diagnostic messages, connect the debug-USB cable from the debug-USB port on the Qualcomm® IQ-9 Beta Evaluation Kit device to the Linux host.

               .. image:: ../../media/k2c-qli-build-ga/uart_ridesx.png

            .. group-tab:: IQ-9075 EVK

               To set up the debug UART connection and view the diagnostic messages, connect the debug-USB cable from the debug-USB port on the Qualcomm® Dragonwing™ IQ-9075 EVK device to the Linux host.

               .. image:: ../../media/k2c-qli-build-ga/uart_iq9075_evk.png

      .. group-tab:: IQ-8275

         .. tabs:: 

            .. group-tab:: IQ-8 Beta EVK

               To set up the debug UART connection and view the diagnostic messages, connect the debug-USB cable from the debug-USB port on the Qualcomm® IQ-8 Beta Evaluation Kit device to the Linux host.

               .. image:: ../../media/k2c-qli-build-ga/uart_ridesx.png

            .. group-tab:: IQ-8275 EVK

               To set up the debug UART connection and view the diagnostic messages, connect the debug-USB cable from the debug-USB port on the Qualcomm® Dragonwing™ IQ-8275 EVK device to the Linux host.

               .. image:: ../../media/k2c-qli-build-ga/uart_iq9075_evk.png

1. Install Minicom on the Linux host:

   .. container:: nohighlight
      
      ::

         sudo apt update
         sudo apt install minicom

2. Check the USB port:

   .. container:: nohighlight
      
      ::

         ls /dev/ttyUSB*

   **Sample output**

   ``/dev/ttyUSB0``

3. Open Minicom:

   .. container:: nohighlight
      
      ::

         sudo minicom -s

4. Use the Down arrow key to select the :guilabel:`Serial port setup` option. Use the Up and Down arrow keys to navigate through the menu.

   .. image:: ../../media/k2c-qli-build-ga/serial_port_setup.jpg
      :align: center

5. Set up the serial device configuration:

   .. note:: Ensure that the letters are in uppercase.

   a. Select :guilabel:`A` on your keyboard to set up the serial device name such as ``/dev/ttyUSB0``.

   #. Select :guilabel:`Enter` to save the changes.

   #. Select :guilabel:`E` on your keyboard to set the baud rate and 8N1 configuration:
   
      i. Select the :guilabel:`E` key again if the baud rate isn't set to **115200**.

      #. Select the :guilabel:`Q` key if the configuration isn't set to **8N1**.

         .. image:: ../../media/k2c-qli-build-ga/option_Q.png
            :align: center

   #. Select :guilabel:`Enter` to save the changes.

   #. Select :guilabel:`F` on your keyboard to set the **Hardware Flow Control**
      to ``No``.

      .. image:: ../../media/k2c-qli-build-ga/serial_device_configuration.png
         :align: center

   #. Select :guilabel:`Enter` to save the changes.

6. Select the :guilabel:`Save setup as dfl` option and then select :guilabel:`Enter`.

   .. image:: ../../media/k2c-qli-build-ga/save_setup_as_dfl.png
      :align: center

7. Select :guilabel:`EXIT` to open the UART console and then select :guilabel:`Enter`.

8. Sign in to the UART console:

   -  Login: ``root``
   -  Password: ``oelinux123`` 
     
      .. note:: If the sign in console doesn't display as expected, verify the USB connection. If the issue persists, disconnect and then reconnect the micro-USB.

.. note:: 
    If you want to run sample applications from the UART shell, remount the root file system with write permissions:

    .. container:: nohighlight
      
       ::

         mount -o rw,remount /

Connect to ADB
^^^^^^^^^^^^^^^^
See `Install and connect to ADB <https://docs.qualcomm.com/bundle/publicresource/topics/80-80022-251/faqs.html#install-adb>`__.

.. _connect_to_network:

Connect to the network
^^^^^^^^^^^^^^^^^^^^^^^

.. _howto_setup_wifi_sub:

**Set up Wi-Fi**

Wi-Fi is operational in Station mode. The Wi-Fi host driver and the authentication for network management are initialized during the device boot up.

1. Connect to the Wireless Access Point (Wi-Fi Router):

   .. container:: nohighlight
      
      ::

         nmcli dev wifi connect <WiFi-SSID> password <WiFi-password>

   **Example**

   .. container:: nohighlight
      
      ::

         root@iq-9075-evk:~# nmcli dev wifi connect Hydra password 1234567890

#. Check the connection and device status:

   .. container:: nohighlight
      
      ::

         nmcli -p device
   
   .. image:: ../../media/k2c-qli-build-ga/status_of_devices.png

#. Check the WLAN connection status and IP address:

   .. container:: nohighlight
      
      ::

         ip address show wlp1s0

   .. image:: ../../media/k2c-qli-build-ga/chk_ip.png

#. Ensure that the connection is active by pinging any website:

   .. container:: nohighlight
      
      ::

         ping google.com

**Switching networks**

If you are already connected to a network and need to reconnect to another network, do the following:

1. Disconnect from the current network:

   .. container:: nohighlight
      
      ::

         nmcli c down Hydra

   .. container:: screenoutput

      .. line-block:: 
         
         Connection ‘Hydra’ successfully deactivated (D-Bus active path: /org/freedesktop/NetworkManager/ActiveConnection/1)

#. Check the disconnect status:

   .. container:: nohighlight
      
      ::

         nmcli -p device

   .. image:: ../../media/k2c-qli-build-ga/status_of_devices_switch_network.png

#. Connect to a different Wi-Fi network:

   .. container:: nohighlight
      
      ::

         nmcli dev wifi connect QualcommAP password XXXXXXXXX

#. Check the connection status:

   .. container:: nohighlight
      
      ::

         nmcli -p device

.. _use-ssh:

**Sign in using SSH**

Establish the :ref:`network connectivity <connect_to_network>` before connecting to SSH.

1. Locate the IP address of the device according to the type of network connection, using the UART console on the Linux host:

   For Ethernet:

   .. container:: nohighlight
      
      ::

         ip address show eth2

   For Wi-Fi:

   .. container:: nohighlight
      
      ::

         ip address show wlp1s0

#. Use the IP address from the Linux host to establish an SSH connection to the device:

   .. container:: nohighlight
      
      ::

         ssh root@ip-address

   **Example**

   ``ssh root@192.168.0.222``

#. Connect to the SSH shell using the following password:

   .. container:: nohighlight
      
      ::

         oelinux123

.. note:: 
   
   - Connect the remote host to the same Wi-Fi access point as the device.
   - To create a non-root user account, see `Create a non-root user account <https://docs.qualcomm.com/bundle/publicresource/topics/80-80022-251/faqs.html#non-root-acc>`__.

Configure Ethernet with RJ45 port
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Ethernet/RJ45 port is enabled as a downstream port of PCIe to USB controller (``renesas``). Ensure that the ``renesas_usb_fw.mem`` file is available at the ``/lib/firmware`` directory.

.. note:: 
   - If the ``renesas_usb_fw.mem`` firmware isn't available at the ``/lib/firmware`` directory, then :ref:`update USB and Ethernet controller firmware <update_usb_eth_controller>`.

To check if the USB to Ethernet controller is enumerated, run the following command:

.. container:: nohighlight
      
   ::

      lsusb

**Sample output**:

.. container:: screenoutput

   Bus 002 Device 003: ID 0b95:1790 ASIX Electronics Corp. AX88179 Gigabit Ethernet
   Bus 002 Device 002: ID 05e3:0625 Genesys Logic, Inc. USB3.2 Hub
   Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
   Bus 001 Device 002: ID 05e3:0610 Genesys Logic, Inc. Hub
   Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub

Connect an RJ45 cable to the device.

To check the Ethernet IP address, run the following command:

.. container:: nohighlight
      
   ::

      ip address

**Sample output**:

.. note:: 10.219.0.106 is the IP address.

.. container:: screenoutput

   enP1p4s0u1u1 Link encap:Ethernet HWaddr A6:CD:9B:FD:C1:B5
            inet addr:10.219.0.106  Bcast:10.219.1.255  Mask:255.255.254.0
            inet6 addr: fe80::a370:7a00:8131:5a03/64 Scope:Link
            UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
            RX packets:1071 errors:0 dropped:0 overruns:0 frame:0
            TX packets:132 errors:0 dropped:0 overruns:0 carrier:0
            collisions:0 txqueuelen:1000
            RX bytes:60711 (59.2 KiB)  TX bytes:18342 (17.9 KiB)

.. _update_usb_eth_controller:

Update USB and Ethernet controller firmware
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

A firmware update to the USB controller may solve USB or Ethernet connectivity issues on the Dragonwing RB3 Gen 2 device.

**Prerequisites**

- Ensure that you upgrade the software as described in `Update the software <https://docs.qualcomm.com/doc/80-80022-251/topic/upgrade-rb3gen2-software.html>`__ before updating the Renesas firmware.
- Ensure that you install the `ADB <https://docs.qualcomm.com/bundle/publicresource/topics/80-80022-251/faqs.html#install-adb>`__ tool. Fastboot comes installed along with it.
- Connect the device to the Ubuntu host computer using a USB Type-C cable.

**Procedure**

1. `Download the firmware <https://www.renesas.com/us/en/products/interface/usb-switches-hubs/upd720201-usb-30-host-controller#design_development>`__, register, and sign in to `Renesas <https://www.renesas.com/>`__. 
#. Rename the downloaded firmware file to ``renesas_usb_fw.mem``.
#. Connect the device to the host computer using a USB cable for ADB.
#. Push the firmware to the device using one of the following commands:

   .. container:: nohighlight

      ::

         adb push renesas_usb_fw.mem /lib/firmware

   OR

   .. container:: nohighlight

      ::

         scp renesas_usb_fw.mem root@<ip-address-of-device>:/lib/firmware

   Example:

   .. container:: screenoutput

      .. code:: nohighlight

         scp renesas_usb_fw.mem root@10.92.175.138:/lib/firmware   

#. Activate the firmware using either of the following options:

   - Option A – Reboot target for USB type A ports.
   - Option B – Manually bind the Renesas xHCI driver.

     .. container:: nohighlight

        ::

           echo "0001:04:00.0" > /sys/bus/pci/drivers/xhci-pci-renesas/bind

   .. note:: To retrieve the device ID, use the following command:

      .. container:: nohighlight

         ::

            sh-5.3# lspci

      In the following sample output, ``0001:04:00.0`` is the device ID.

      .. container:: screenoutput

         0001:00:00.0 PCI bridge: Qualcomm Technologies, Inc SM8250 PCIe Root Complex [Snapdragon 865/870 5G]
         0001:01:00.0 PCI bridge: Toshiba Corporation Device 0623
         0001:02:01.0 PCI bridge: Toshiba Corporation Device 0623
         0001:02:02.0 PCI bridge: Toshiba Corporation Device 0623
         0001:02:03.0 PCI bridge: Toshiba Corporation Device 0623
         0001:04:00.0 USB controller: Renesas Electronics Corp. uPD720201 USB 3.0 Host Controller (rev 03)
         0001:05:00.0 Ethernet controller: Toshiba Corporation Device 0220
         0001:05:00.1 Ethernet controller: Toshiba Corporation Device 0220 

#. Verify firmware enumeration:

   .. container:: nohighlight

      :: 

         dmesg
