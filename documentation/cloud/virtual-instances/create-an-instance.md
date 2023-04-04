---
title: create-an-instance
displayName: Create
order: 10
published: true
toc:
---
1. Open **Instances** tab and click **Create Instance**.

<img src="https://support.gcore.com/hc/article_attachments/10962065525265" alt="" width="666" height="354">

2. Select the region where you want to deploy the instance.

<img src="https://support.gcore.com/hc/article_attachments/10962046605713" alt="" width="505" height="320">

Regions can be of two types: Core and Edge. A region determines the equipment specifications.

 

|                                          | Core                        | Edge*                               |
|------------------------------------------|-----------------------------|-------------------------------------|
| Equipment generation                     | The latest                  | Different                           |
| Designed for high scalability on the fly | Yes                         | Not                                 |
| Available resources                      | 1000 cores and 30 TB of RAM | Up to 300 cores and 1 TB of RAM     |
| Ports for user traffic and storage       | Separate                    | Shared                              |
| Choice of configurations                 | 8 types, 45 configurations  | 1 type (Standard), 4 configurations |
| Price                                    | Higher                      | Lower                               |


\* We can always transform an edge region to core upon your request.

3. Select an **Image**.

<img src="https://support.gcore.com/hc/article_attachments/10962046778257" alt="" width="505" height="426">

*   Choose an OS template, a volume, a snapshot, a custom [image](https://gcore.com/support/articles/360002429818/), or a template from the marketplace.
*   (for a Linux instance) Remember the login from the **For login to OS** field to connect to your instance on Linux OS via SSH from another Linux device. For details, refer to the article: [How to connect to the virtual machine via SSH](https://gcore.com/support/articles/360012635517/).

**Important!** If you want to connect to a Linux instance from a Windows device, use a special application such as [PuTTY](https://www.putty.org/).

4. For **Type**, choose the configuration.

<img src="https://support.gcore.com/hc/article_attachments/10962046780817" alt="" width="555" height="454">

Select the CPU generation.

Select the flavor:

*   *   **Shared**—VMs that share a core of a physical machine with other VMs, designed for workloads that do not require high performance.  
        Availability: Luxembourg
    *   **Standard**—VMs best suited for a wide range of workloads that require predictable computing performance.  
        Availability: all regions.
    *   **vCPU**—CPU Optimized VMs, best suited for CPU-intensive tasks that require predictable computing performance such as batch processing of large data sets and video encoding.  
        Availability: all CORE regions.
    *   **Memory**—Memory Optimized VMs, suitable for memory-intensive tasks such as databases, SRM/ERP or data warehouses.  
        Availability: all CORE regions.
    *   **High Frequency**—VMs with the high CPU clock rate (3.7 GHz in the basic configuration). It is perfect for applications requiring single-threaded performance, financial and probabilistic analytics, and automation of computational processes.  
        Availability: Luxembourg, Manassas, Frankfurt.
    *   **SGX**—VMs that support Intel SGX (Security Guard Extension) that helps to protect data from disclosure or modification by isolating private parts of code and data (enclaves). This configuration is the best for those who store critical, sensitive data in the cloud.  
        Availability: Luxembourg, Manassas, Singapore.
    *   **GPU**—VMs with a graphics card, suitable for working with graphic information, deep and machine learning applications, and high-performance computing.  
        Availability: Luxembourg.
    *   **GPU-HF**—VMs with the high clock rate of the CPU and with a graphics card, suitable for complex calculations that require graphics accelerator resources, high performance and speed.  
        Availability: Luxembourg.

**Note:** The bandwidth limit for the **Shared** flavor is up 100 Mbps, for other configurations it is up 1 Gbps.

5. Configure **Volumes**.

<img src="https://support.gcore.com/hc/article_attachments/10962065812241" alt="" width="554" height="484">

Enter a volume name.

Choose **Type**. There are four types of volumes available:

*   *   **High IOPS SSD**—high IOPS network SSD disk—highest performance network SSD block storage designed for latency-sensitive transactional workloads (60 IOPS per 1 GB).
    *   **Standard**—standard network SSD disk—high-performance network SSD block storage with stable and high random I/O performance, and high data reliability (6 IOPS per 1 GB).
    *   **Cold**—network HDD disk—lowest cost HDD block storage for less frequently accessed workloads (unavailable in Manassas).
    *   **Ultra**—Network Block Storage—suitable for non-critical data and less frequently accessed workloads.

Set the volume **Size** in GiB.

(optional) Add an **Attachment Tag**.

6. Add one or multiple interfaces in Network settings.

If you select a **public** interface, you can turn on the **Use Reserved IP** toggle and assign a [reserved IP address](https://gcore.com/support/articles/4405927368721/) to your instance.

<img src="https://support.gcore.com/hc/article_attachments/10962065819409" alt="" width="555" height="349">

If you select a **private** interface, configure a network and a subnetwork according to the steps below. 

<img src="https://support.gcore.com/hc/article_attachments/11780961325457" alt="Screenshot_2022-11-02_at_15.05_1.jpg" width="517" height="471">

To configure a network, select an existing network from the drop-down list or create a new one by clicking **Add a new network**. If you choose the latter, the new window will open:

<img src="https://support.gcore.com/hc/article_attachments/10962065965201" alt="" width="505" height="349">

1) Enter the network name.

2) (optional) Turn on the **Baremetal network** toggle to connect bare metal servers to the network

3) (optional) Turn on the **Add tags** toggle to add metadata to the network.

4) Click **Create network**.

To create a subnet, select an existing subnet from the drop-down list or create a new one by clicking **Add a new subnetwork**. If you choose the latter, the new window will open:

<img src="https://support.gcore.com/hc/article_attachments/10962047206801" alt="" width="444" height="562">

1) Enter the subnet name.

2) Set CIDR between ranges: 10.0.0.0 - 10.255.255.255, 172.16.0.0—172.31.255.255, 192.168.0.0—192.168.255.255. Set the mask between 16 and 24.

3) (optional) Turn on the **Enable DHCP** toggle to automatically assign IP addresses to machines in the subnet.

4) (optional) Turn on the **Non-routable subnetwork** toggle to block access to the subnet from external networks and other subnets. If you keep the network routable, you can specify the **Gateway IP** address. Otherwise, a random IP address will be assigned.

5) (optional) Enter **Custom DNS servers** to add specific DNS servers**.**

6) (optional) Turn on **Add tags** to add metadata to the subnetwork.

7) Click **Create subnetwork**.

Optionally, you can turn on the **Use Reserved IP** toggle to assign a [reserved IP address](https://gcore.com/support/articles/4405927368721/) to your instance and/or turn on the **Use Floating IP** toggle to assign a [floating IP address](https://gcore.com/support/articles/360013333757/) to your instance.

7. For **Firewall settings**, select the default firewall or create a new one by clicking **Add firewall**.

<img src="https://support.gcore.com/hc/article_attachments/10962047195665" alt="" width="663" height="145">

If you keep the default firewall, the incoming traffic will be allowed over ICMP, TCP (SSH) and RDP protocols.

If you want to create a new firewall, refer to the article: [Add Firewall and configure it](https://gcore.com/support/articles/360012995117/).

8. (for a Linux instance) Configure an **SSH key** for a remote SSH connection.

<img src="https://support.gcore.com/hc/article_attachments/10962047318545" alt="" width="666" height="147">

You can add an existing SSH key or generate a new one. You enter a public key and use a private key for connection. For details, see the article: [Connect to Instance via SSH](https://gcore.com/support/articles/360012635517/).

9. (for a Windows instance) Configure **Access** by setting a password for the Admin user.

<img src="https://support.gcore.com/hc/article_attachments/10962047333009" alt="" width="666" height="172">

Your password must contain between 8 and 16 characters and at least one lowercase letter (a-z), one uppercase letter (A-Z), one number (0-9) and one special character (!#$%&’()\*+,-./:;<=>?@\[\]^\_{|}~).

You can connect to a Windows instance [from Control Panel](https://gcore.com/support/articles/360020733518/) or from your computer over RDP protocol.

10. (optional) Configure **Additional options**.

*   Turn on **User data** to customize your VM during the initial boot by a cloud-init agent.

<img src="https://support.gcore.com/hc/article_attachments/10962047426065" alt="" width="668" height="299">

You can configure your password to connect to your Linux instance [directly from your Control Panel](https://gcore.com/support/articles/360020733518/) or via SSH. To do it, insert the code below to the **User data** field and enter your password:

#cloud-config  
password: **your password**  
chpasswd: { expire: False }  
ssh\_pwauth: True

**Note:** If an instance is only in a private subnet, DHCP must be enabled in the settings of this subnet, so you can log in with a password.

You can configure the password hash—a machine-readable set of symbols. It’ll protect your real password from being compromised. To generate a hash, use the Python script:

#!/usr/bin/env python3  
\# based on [https://stackoverflow.com/a/17992126/117471](https://stackoverflow.com/a/17992126/117471)\# pip3 install passlib  
import sys  
from getpass import getpass  
from passlib.hash import sha512\_crypt  
passwd = input() if not sys.stdin.isatty() else getpass()  
print(sha512\_crypt.hash(passwd , rounds = 5000 ))

*   Turn on **Add tags** to add a key-value pair that form the metadata of the virtual machine description.

<img src="https://support.gcore.com/hc/article_attachments/10962047425937" alt="" width="669" height="269">

*   Turn on **Add to placement group** to determine how to place multiple instances.

<img src="https://support.gcore.com/hc/article_attachments/10962066510993" alt="" width="665" height="334">

**Placement Group** is a setting that determines whether virtual machines will be hosted on the same physical server (**affinity** policy) or on different ones (**anti-affinity** policy). For more detail, see the article: [Placement groups. What it is, how to add instance to group](https://gcore.com/support/articles/4408106493841/).

You can add the instance to an existing placement group or create a new one by clicking **Add placement group**.

10. Specify the number of machines with the same configuration you need and give them names.

<img src="https://support.gcore.com/hc/article_attachments/10962066511889" alt="" width="666" height="279">

The maximum number is limited by your quotas.

For names, use Latin characters, underscores, spaces, and dots.

11. Click **Create virtual machine**.

Your server will be transitioned to the **Building** status. The system will allocate resources for your virtual machine.

After that, the server will be automatically moved to the **Power on** status. Your machine is ready to run!